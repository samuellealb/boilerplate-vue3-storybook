import { rest } from 'msw'
import { users } from './data'

export const handlers = [
  rest.get(`/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(users)
    )
  })
] 