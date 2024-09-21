'use client'

import { Typography, Upload, Button, List, Spin, Modal } from 'antd'
import {
  UploadOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
const { confirm } = Modal
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RAGDocumentUploadPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState<any[]>([])
  const [uploading, setUploading] = useState(false)

  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: loadRagFile } = Api.rag.loadFile.useMutation()
  const {
    data: ragVectors,
    isLoading: isLoadingVectors,
    refetch: refetchVectors,
  } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: deleteRagVector } = Api.ragVector.delete.useMutation()

  const isAdmin = checkOrganizationRole('owner')

  if (!isAdmin) {
    router.push('/home')
    return null
  }

  const handleUpload = async () => {
    setUploading(true)
    try {
      for (let file of fileList) {
        const { url } = await uploadFile({ file: file.originFileObj })
        await loadRagFile({ url, tags: [file.name] })
      }
      setFileList([])
      refetchVectors()
      enqueueSnackbar('Documents uploaded successfully', { variant: 'success' })
    } catch (error) {
      console.error('Upload failed:', error)
      enqueueSnackbar('Failed to upload documents', { variant: 'error' })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = (id: string) => {
    confirm({
      title: 'Are you sure you want to delete this document?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteRagVector({ where: { id } })
          refetchVectors()
          enqueueSnackbar('Document deleted successfully', {
            variant: 'success',
          })
        } catch (error) {
          console.error('Delete failed:', error)
          enqueueSnackbar('Failed to delete document', { variant: 'error' })
        }
      },
    })
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>RAG Document Upload</Title>
        <Text>
          Upload documents to enhance the AI's knowledge base about grants and
          tree planting initiatives.
        </Text>

        <Upload
          multiple
          fileList={fileList}
          onChange={({ fileList }) => setFileList(fileList)}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Select Files</Button>
        </Upload>

        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: '16px' }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>

        <Title level={3} style={{ marginTop: '32px' }}>
          Uploaded Documents
        </Title>
        {isLoadingVectors ? (
          <Spin />
        ) : (
          <List
            dataSource={ragVectors}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button
                    key="delete"
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={item.key}
                  description={`Uploaded on: ${dayjs(item.dateCreated).format('MMMM D, YYYY HH:mm')}`}
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </PageLayout>
  )
}
