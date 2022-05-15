import { rest } from 'msw'
import { jobs } from './data'

const apiURL = import.meta.env.VITE_API_URL

export const handlers = [
  rest.get(`/jobs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(jobs)
    )
  })
] 