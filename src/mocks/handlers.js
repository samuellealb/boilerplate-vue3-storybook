import { rest } from 'msw'
import { items } from './data'

const loadedItems = {data: [...items]} 

export const handlers = [
  rest.get(`/api/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(loadedItems)
    )
  }),

  rest.delete(`/api/items/:itemId`, (req, res, ctx) => {
    const { itemId } = req.params
    const item = loadedItems.data.find(item => item.id === +itemId);
    const index = loadedItems.data.findIndex(item => item.id === +itemId);
    loadedItems.data.splice(index, 1);
    return res(
      ctx.status(200),
      ctx.json(item)
    )
  })
] 