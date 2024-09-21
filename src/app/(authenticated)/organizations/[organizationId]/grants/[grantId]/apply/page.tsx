'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Steps,
  Typography,
  Space,
  Row,
  Col,
  Spin,
} from 'antd'
import {
  SaveOutlined,
  SendOutlined,
  UserOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { Step } = Steps
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GrantApplicationFormPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, isLoggedIn } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [currentStep, setCurrentStep] = useState(0)
  const [form] = Form.useForm()

  const { data: grant, isLoading: isLoadingGrant } =
    Api.grant.findUnique.useQuery({
      where: { id: params.grantId },
    })

  const { data: existingApplication, isLoading: isLoadingApplication } =
    Api.application.findFirst.useQuery({
      where: { userId: user?.id, grantId: params.grantId },
      include: { documents: true },
    })

  const { mutateAsync: createApplication } =
    Api.application.create.useMutation()
  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()

  useEffect(() => {
    if (!isLoggedIn) {
      enqueueSnackbar('Please log in to apply for grants.', {
        variant: 'error',
      })
      router.push('/home')
    }
  }, [isLoggedIn, router])

  useEffect(() => {
    if (existingApplication) {
      form.setFieldsValue({
        personalInfo: {
          name: user?.name,
          email: user?.email,
        },
        applicationDetails: existingApplication.documents?.[0]?.name || '',
      })
    }
  }, [existingApplication, user, form])

  const onFinish = async (values: any) => {
    try {
      if (existingApplication) {
        await updateApplication({
          where: { id: existingApplication.id },
          data: {
            documents: {
              update: {
                where: { id: existingApplication.documents?.[0]?.id },
                data: { name: values.applicationDetails },
              },
            },
          },
        })
      } else {
        await createApplication({
          data: {
            userId: user!.id,
            grantId: params.grantId,
            status: 'DRAFT',
            documents: {
              create: {
                name: values.applicationDetails,
              },
            },
          },
        })
      }
      enqueueSnackbar('Application saved successfully!', { variant: 'success' })
    } catch (error) {
      console.error('Error saving application:', error)
      enqueueSnackbar('Failed to save application. Please try again.', {
        variant: 'error',
      })
    }
  }

  const steps = [
    {
      title: 'Personal Information',
      content: (
        <Form.Item
          name={['personalInfo', 'name']}
          label="Full Name"
          rules={[{ required: true }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>
      ),
    },
    {
      title: 'Application Details',
      content: (
        <Form.Item
          name="applicationDetails"
          label="Application Summary"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} prefix={<FileTextOutlined />} />
        </Form.Item>
      ),
    },
    {
      title: 'Review',
      content: (
        <Space direction="vertical">
          <Paragraph>
            Please review your application before submitting.
          </Paragraph>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={() => form.submit()}
          >
            Submit Application
          </Button>
        </Space>
      ),
    },
  ]

  if (isLoadingGrant || isLoadingApplication) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <Title level={2}>Grant Application Form</Title>
            <Paragraph>
              Complete the following steps to apply for the grant: {grant?.name}
            </Paragraph>
            <Steps current={currentStep}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                personalInfo: {
                  name: user?.name,
                  email: user?.email,
                },
              }}
            >
              {steps[currentStep].content}
              <Form.Item>
                <Space>
                  {currentStep > 0 && (
                    <Button onClick={() => setCurrentStep(currentStep - 1)}>
                      Previous
                    </Button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      Next
                    </Button>
                  )}
                  <Button icon={<SaveOutlined />} onClick={() => form.submit()}>
                    Save Progress
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
