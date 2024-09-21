'use client'

import { Typography, Table, Space, Button, Row, Col } from 'antd'
import { DownloadOutlined, FileTextOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GranteeDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: applications,
    isLoading,
    refetch,
  } = Api.application.findMany.useQuery({
    where: { userId: user?.id },
    include: { grant: true, documents: true },
  })

  const handleDownload = async (applicationId: string) => {
    try {
      // This is a placeholder. In a real scenario, you'd implement the download logic here.
      enqueueSnackbar('Application downloaded successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to download application', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Grant Name',
      dataIndex: ['grant', 'name'],
      key: 'grantName',
    },
    {
      title: 'Submission Date',
      dataIndex: 'submissionDate',
      key: 'submissionDate',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<DownloadOutlined />}
            onClick={() => handleDownload(record.id)}
          >
            Download
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>Grantee Dashboard</Title>
            <Text>View and manage your submitted grant applications.</Text>

            <Table
              columns={columns}
              dataSource={applications}
              loading={isLoading}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />

            <Button
              icon={<FileTextOutlined />}
              onClick={() => router.push('/home')}
            >
              Apply for New Grants
            </Button>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
