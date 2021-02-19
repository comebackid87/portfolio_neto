import axios from 'axios'
import { useAPIHandler, fetcher } from '@/actions'
import useSWR from 'swr'

export const useCreateBlog = () => useAPIHandler((data) => axios.post('/api/v1/blogs', data))
export const useUpdateBlog = () => useAPIHandler((data) => axios.patch(`/api/v1/blog/${id}`, data))

export const useGetBlog = (id) => {   
    const { data, error, ...rest } = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher)
    return { data, error, loading: !data && !error, ...rest }
}