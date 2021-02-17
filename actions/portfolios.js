import axios from 'axios'
import { useAPIHandler } from '@/actions'

export const useCreatePortfolio = () => useAPIHandler((data) => axios.post('/api/v1/portfolios', data))