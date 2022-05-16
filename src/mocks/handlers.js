import { rest } from 'msw'
import { projects } from './data'

export const handlers = [
  rest.get(`/projects`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(projects)
    )
  })
] 