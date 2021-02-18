import axios from 'axios'
import { useAPIHandler, fetcher } from '@/actions'
import useSWR from 'swr'

export const useCreateBlog = () => useAPIHandler((data) => axios.post('/api/v1/blogs', data))
