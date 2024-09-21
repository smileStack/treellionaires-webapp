'use client'

import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Table,
  Modal,
} from 'antd'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PublishGrantProgramPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [selectedApplication, setSelectedApplication] = useState<string | null>(
    null,
  )

  const {
    data: grants,
    isLoading: isLoadingGrants,
    refetch: refetchGrants,
  } = Api.grant.findMany.useQuery({
    where: { organizationId: params.organizationId },
    include: { applications: { include: { user: true } } },
  })

  const { mutateAsync: createGrant } = Api.grant.create.useMutation()
  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()

  const handleCreateGrant = async (values: any) => {
    try {
      await createGrant({
        data: {
          ...values,
          organizationId: params.organizationId,
          status: 'OPEN',
          flaggedForReview: false,
          startDate: values.startDate.toISOString(),
          endDate: values.endDate.toISOString(),
        },
      })
      enqueueSnackbar('Grant program created successfully', {
        variant: 'success',
      })
      form.resetFields()
      refetchGrants()
    } catch (error) {
      enqueueSnackbar('Failed to create grant program', { variant: 'error' })
    }
  }

  const handleSelectWinner = async (applicationId: string) => {
    try {
      await updateApplication({
        where: { id: applicationId },
        data: { status: 'APPROVED' },
      })
      enqueueSnackbar('Winner selected successfully', { variant: 'success' })
      setSelectedApplication(null)
      refetchGrants()
    } catch (error) {
      enqueueSnackbar('Failed to select winner', { variant: 'error' })
    }
  }

  const columns = [
    { title: 'Grant Name', dataIndex: 'name', key: 'name' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Applications',
      dataIndex: 'applications',
      key: 'applications',
      render: (applications: any[]) => applications.length,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Button onClick={() => setSelectedApplication(record.id)}>
          View Applications
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Grantor Dashboard</Title>
        <Paragraph>
          Create and manage your grant programs, and review submitted
          applications.
        </Paragraph>

        <Title level={3}>Create New Grant Program</Title>
        <Form form={form} onFinish={handleCreateGrant} layout="vertical">
          <Form.Item
            name="name"
            label="Grant Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="eligibility"
            label="Eligibility"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="guideline"
            label="Guidelines"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="timelines"
            label="Timelines"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="linkToSite"
            label="Link to Site"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="grantorPhone"
            label="Grantor Phone"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="grantorEmail"
            label="Grantor Email"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Create Grant Program
            </Button>
          </Form.Item>
        </Form>

        <Title level={3} style={{ marginTop: '40px' }}>
          Your Grant Programs
        </Title>
        <Table
          dataSource={grants}
          columns={columns}
          rowKey="id"
          loading={isLoadingGrants}
        />

        <Modal
          title="Applications"
          visible={!!selectedApplication}
          onCancel={() => setSelectedApplication(null)}
          footer={null}
        >
          {grants
            ?.find(grant => grant.id === selectedApplication)
            ?.applications.map(application => (
              <div
                key={application.id}
                style={{
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #f0f0f0',
                }}
              >
                <p>Applicant: {application.user?.name}</p>
                <p>Status: {application.status}</p>
                <p>
                  Submission Date:{' '}
                  {dayjs(application.submissionDate).format('YYYY-MM-DD')}
                </p>
                {application.status !== 'APPROVED' && (
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => handleSelectWinner(application.id)}
                  >
                    Select as Winner
                  </Button>
                )}
              </div>
            ))}
        </Modal>
      </div>
    </PageLayout>
  )
}
