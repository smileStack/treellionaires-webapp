'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { SearchOutlined, SortAscendingOutlined } from '@ant-design/icons'
import MapboxGeocoder, {
  GeocodeService,
} from '@mapbox/mapbox-sdk/services/geocoding'
import { Button, Input, Select, Space, Table, Typography } from 'antd'
import dayjs from 'dayjs'
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useRef, useState } from 'react'
import TableauEmbed from './TableauEmbed'

const { Title, Paragraph } = Typography

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const mapContainer = useRef(null)
  const [geocodingClient, setGeocodingClient] = useState<GeocodeService>()
  const [map, setMap] = useState<Map>()

  const [grants, setGrants] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [sortField, setSortField] = useState('name')
  const [sortOrder, setSortOrder] = useState<'ascend' | 'descend'>('ascend')

  const { data: secrets } = Api.configuration.getPublic.useQuery()
  const { data: grantsData, isLoading: grantsLoading } =
    Api.grant.findMany.useQuery({})
  const { data: eventsData, isLoading: eventsLoading } =
    Api.event.findMany.useQuery({})

  useEffect(() => {
    if (grantsData) setGrants(grantsData)
    if (eventsData) setEvents(eventsData)
  }, [grantsData, eventsData])

  useEffect(() => {
    const accessToken = secrets?.['PUBLIC_MAPBOX_ACCESS_TOKEN']
    if (!accessToken) return

    mapboxgl.accessToken = accessToken
    const geocodingClient = MapboxGeocoder(mapboxgl)
    setGeocodingClient(geocodingClient)

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/umussetu/clsbdduiu003301rb3x9cbe3e',
      center: [-98.5795, 39.8283], // Center of the US
      zoom: 3,
    })

    setMap(map)

    return () => map.remove()
  }, [secrets])

  const Container = ({ children, className }) => {
    return <div className={`container ${className}`}>{children}</div>
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'Grant', value: 'grant' },
        { text: 'Event', value: 'event' },
      ],
      onFilter: (value, record) => record.type === value,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => dayjs(text).format('YYYY-MM-DD'),
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ]

  const data = [
    ...grants.map(grant => ({
      key: grant.id,
      name: grant.name,
      type: 'grant',
      date: grant.startDate,
      description: grant.description,
    })),
    ...events.map(event => ({
      key: event.id,
      name: event.name,
      type: 'event',
      date: event.startDateTime,
      description: event.description,
    })),
  ]

  const filteredData = data
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => filterType === 'all' || item.type === filterType)

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '20px' }}>
        <Title level={2}>Tree Planting Initiatives and Events Map</Title>
        <Paragraph>
          Explore tree planting grants and events across the country. Use the
          map to visualize locations and the table below for detailed
          information.
        </Paragraph>
        <TableauEmbed />
        <Space style={{ marginBottom: '20px' }}>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={value => setFilterType(value)}
            options={[
              { value: 'all', label: 'All' },
              { value: 'grant', label: 'Grants' },
              { value: 'event', label: 'Events' },
            ]}
          />
          <Button
            icon={<SortAscendingOutlined />}
            onClick={() =>
              setSortOrder(sortOrder === 'ascend' ? 'descend' : 'ascend')
            }
          >
            Sort
          </Button>
        </Space>

        <Table
          columns={columns}
          dataSource={filteredData}
          loading={grantsLoading || eventsLoading}
          onChange={(pagination, filters, sorter: any) => {
            setSortField(sorter.field)
            setSortOrder(sorter.order)
          }}
        />
      </div>
    </PageLayout>
  )
}
