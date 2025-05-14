import { client } from '@/utils/https'

export const getPostsCommentsApi = async (id) => {
  if (!id) {
    return
  }
  const resp = client.get(`/comments?postId=${id}`)

  return resp
}

export const createComment = (postId, name, email, body) => {
  const resp = client.post('/comments/', {
    postId,
    name,
    email,
    body,
  })

  return resp
}

export const deleteComment = (id) => {
  const resp = client.delete(`/comments/${id}`)

  return resp
}
