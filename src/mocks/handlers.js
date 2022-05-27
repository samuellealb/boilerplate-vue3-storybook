import { rest } from 'msw'
import { items } from './data'

const loadedItems = [...items]

export const handlers = [
  rest.get(`/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(loadedItems)
    )
  }),

  rest.delete(`/item/:itemId`, (req, res, ctx) => {
    const { itemId } = req.params
    const index = loadedItems.findIndex(item => item.id === +itemId);
    loadedItems.splice(index, 1);
    return res(
      ctx.status(200),
      ctx.json(loadedItems)
    )
  })
] 