'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Button,
  Modal,
  Table,
  Space,
  Select,
  Input,
} from 'antd'
import {
  CalendarOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  FlagOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GrantDirectoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [sortField, setSortField] = useState<string>('startDate')
  const [filterType, setFilterType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    data: grants,
    isLoading: isLoadingGrants,
    refetch: refetchGrants,
  } = Api.grant.findMany.useQuery({})
  const {
    data: events,
    isLoading: isLoadingEvents,
    refetch: refetchEvents,
  } = Api.event.findMany.useQuery({})
  const { mutateAsync: updateGrant } = Api.grant.update.useMutation()
  const { mutateAsync: updateEvent } = Api.event.update.useMutation()

  useEffect(() => {
    refetchGrants()
    refetchEvents()
  }, [])

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setSelectedItem(null)
  }

  const handleApply = (grantId: string) => {
    if (user) {
      router.push(
        `/organizations/${params.organizationId}/grants/${grantId}/apply`,
      )
    } else {
      enqueueSnackbar('Please sign in to apply', { variant: 'info' })
    }
  }

  const handleFlagForReview = async (item: any) => {
    try {
      if ('amount' in item) {
        await updateGrant({
          where: { id: item.id },
          data: { flaggedForReview: !item.flaggedForReview },
        })
      } else {
        await updateEvent({
          where: { id: item.id },
          data: { flaggedForReview: !item.flaggedForReview },
        })
      }
      enqueueSnackbar('Item flagged for review', { variant: 'success' })
      refetchGrants()
      refetchEvents()
    } catch (error) {
      enqueueSnackbar('Error flagging item for review', { variant: 'error' })
    }
  }

  const allItems = [...(grants || []), ...(events || [])]

  const filteredItems = allItems.filter(item => {
    const matchesType =
      filterType === 'all' ||
      (filterType === 'grant' && 'amount' in item) ||
      (filterType === 'event' && !('amount' in item))
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const sortedItems = filteredItems.sort((a, b) => {
    const dateA = 'amount' in a ? dayjs(a.startDate) : dayjs(a.startDateTime)
    const dateB = 'amount' in b ? dayjs(b.startDate) : dayjs(b.startDateTime)
    return sortField === 'startDate' ? dateA.diff(dateB) : dateB.diff(dateA)
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <a onClick={() => handleItemClick(record)}>{text}</a>
      ),
    },
    {
      title: 'Type',
      key: 'type',
      render: (text: string, record: any) => (
        <span>{'amount' in record ? 'Grant' : 'Event'}</span>
      ),
    },
    {
      title: 'Date',
      key: 'date',
      render: (text: string, record: any) => (
        <span>
          {dayjs(
            'amount' in record ? record.startDate : record.startDateTime,
          ).format('YYYY-MM-DD')}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Space>
          {'amount' in record && (
            <Button onClick={() => handleApply(record.id)}>
              {user ? 'Apply Now' : 'Sign In to Apply'}
            </Button>
          )}
          <Button
            icon={<FlagOutlined />}
            onClick={() => handleFlagForReview(record)}
          >
            {record.flaggedForReview ? 'Unflag' : 'Flag for Review'}
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Card>
        <Title level={2}>Grant and Event Directory</Title>
        <Paragraph>
          Browse available grant funding and tree planting initiatives to find
          opportunities that match your organization's needs.
        </Paragraph>

        <Space style={{ marginBottom: 16 }}>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={value => setFilterType(value)}
          >
            <Option value="all">All</Option>
            <Option value="grant">Grants</Option>
            <Option value="event">Events</Option>
          </Select>
          <Select
            defaultValue="startDate"
            style={{ width: 120 }}
            onChange={value => setSortField(value)}
          >
            <Option value="startDate">Sort by Start Date</Option>
            <Option value="endDate">Sort by End Date</Option>
          </Select>
          <Input
            placeholder="Search by name"
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: 200 }}
          />
        </Space>

        <Table
          columns={columns}
          dataSource={sortedItems}
          loading={isLoadingGrants || isLoadingEvents}
          rowKey="id"
        />

        <Modal
          title={selectedItem?.name}
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width={800}
        >
          {selectedItem && (
            <div>
              {'amount' in selectedItem ? (
                <>
                  <Paragraph>
                    <strong>Description:</strong> {selectedItem.description}
                  </Paragraph>
                  <Paragraph>
                    <strong>Amount:</strong> ${selectedItem.amount}
                  </Paragraph>
                  <Paragraph>
                    <strong>Start Date:</strong>{' '}
                    {dayjs(selectedItem.startDate).format('YYYY-MM-DD')}
                  </Paragraph>
                  <Paragraph>
                    <strong>End Date:</strong>{' '}
                    {dayjs(selectedItem.endDate).format('YYYY-MM-DD')}
                  </Paragraph>
                  <Paragraph>
                    <strong>Eligibility:</strong> {selectedItem.eligibility}
                  </Paragraph>
                  <Paragraph>
                    <strong>Guidelines:</strong> {selectedItem.guideline}
                  </Paragraph>
                  <Paragraph>
                    <strong>Timelines:</strong> {selectedItem.timelines}
                  </Paragraph>
                  <Paragraph>
                    <strong>Contact:</strong> {selectedItem.grantorPhone},{' '}
                    {selectedItem.grantorEmail}
                  </Paragraph>
                  {selectedItem.grantorAddress && (
                    <Paragraph>
                      <strong>Address:</strong> {selectedItem.grantorAddress}
                    </Paragraph>
                  )}
                  {selectedItem.supportingDocs && (
                    <Paragraph>
                      <strong>Supporting Documents:</strong>{' '}
                      {selectedItem.supportingDocs}
                    </Paragraph>
                  )}
                  <Button
                    type="primary"
                    onClick={() => handleApply(selectedItem.id)}
                  >
                    {user ? 'Apply Now' : 'Sign In to Apply'}
                  </Button>
                </>
              ) : (
                <>
                  <Paragraph>
                    <strong>Description:</strong> {selectedItem.description}
                  </Paragraph>
                  <Paragraph>
                    <strong>Start Date:</strong>{' '}
                    {dayjs(selectedItem.startDateTime).format(
                      'YYYY-MM-DD HH:mm',
                    )}
                  </Paragraph>
                  <Paragraph>
                    <strong>End Date:</strong>{' '}
                    {dayjs(selectedItem.endDateTime).format('YYYY-MM-DD HH:mm')}
                  </Paragraph>
                  <Paragraph>
                    <strong>Location:</strong> {selectedItem.location}
                  </Paragraph>
                  <Paragraph>
                    <strong>Organizer:</strong> {selectedItem.organizerName}
                  </Paragraph>
                  <Paragraph>
                    <strong>Contact:</strong> {selectedItem.organizerEmail},{' '}
                    {selectedItem.organizerPhone}
                  </Paragraph>
                  <Button
                    type="primary"
                    href={selectedItem.linkToSite}
                    target="_blank"
                  >
                    View Event Details
                  </Button>
                </>
              )}
            </div>
          )}
        </Modal>
      </Card>
    </PageLayout>
  )
}
