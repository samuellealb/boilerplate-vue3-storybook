import { rest } from 'msw'
import { projects } from './data'

const apiURL = import.meta.env.VITE_API_URL

export const handlers = [
  rest.get(`/projects`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(projects)
    )
  })
] 