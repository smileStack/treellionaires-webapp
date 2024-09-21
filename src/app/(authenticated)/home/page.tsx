'use client'

import { useUserContext } from '@/core/context'
import { useOrganizationContext } from '@/core/context/internal/useOrganizationContext'
import { PageLayout } from '@/designSystem'
import {
  BankOutlined,
  TrademarkCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Row, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
const { Title, Paragraph } = Typography

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar()

  const handleRoleSelection = (role: 'grantee' | 'grantor') => {
    if (role === 'grantee') {
      router.push(`/organizations/${user?.organizationId}/grantee/dashboard`)
    } else {
      router.push(`/organizations/${user?.organizationId}/grantor/dashboard`)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title
            level={1}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            Welcome to Tree Planting Grants
          </Title>

          <Card style={{ marginBottom: '2rem' }}>
            <Title level={2}>
              <TrademarkCircleOutlined style={{ marginRight: '0.5rem' }} />
              Why Tree Planting is Important
            </Title>
            <Paragraph>
              Tree planting is crucial for our environment. Trees absorb carbon
              dioxide, provide oxygen, prevent soil erosion, create habitats for
              wildlife, and contribute to biodiversity. By planting trees, we
              can combat climate change, improve air quality, and create a more
              sustainable future for generations to come.
            </Paragraph>
          </Card>

          <Title
            level={2}
            style={{ textAlign: 'center', marginBottom: '1rem' }}
          >
            Choose Your Journey
          </Title>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                hoverable
                onClick={() => handleRoleSelection('grantee')}
                style={{ height: '100%' }}
              >
                <Title level={3}>
                  <UserOutlined style={{ marginRight: '0.5rem' }} />
                  For Grantees
                </Title>
                <Paragraph>
                  Are you looking for funding for your tree planting project? As
                  a grantee, you can:
                </Paragraph>
                <ul>
                  <li>Browse available grants</li>
                  <li>Apply for funding</li>
                  <li>Track your applications</li>
                  <li>Report on your project's progress</li>
                </ul>
                <Button
                  type="primary"
                  onClick={() => handleRoleSelection('grantee')}
                >
                  Go to Grantee Dashboard
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                hoverable
                onClick={() => handleRoleSelection('grantor')}
                style={{ height: '100%' }}
              >
                <Title level={3}>
                  <BankOutlined style={{ marginRight: '0.5rem' }} />
                  For Grantors
                </Title>
                <Paragraph>
                  Do you want to fund tree planting initiatives? As a grantor,
                  you can:
                </Paragraph>
                <ul>
                  <li>Create and manage grant programs</li>
                  <li>Review applications</li>
                  <li>Award funding to worthy projects</li>
                  <li>Monitor funded projects' progress</li>
                </ul>
                <Button
                  type="primary"
                  onClick={() => handleRoleSelection('grantor')}
                >
                  Go to Grantor Dashboard
                </Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}
