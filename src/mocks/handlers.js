import { rest } from 'msw'
import { items } from './data'

export const handlers = [
  rest.get(`/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(items)
    )
  })
] 