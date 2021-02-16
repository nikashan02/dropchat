import { objectType } from 'nexus'

export const Room = objectType({
  name: 'Room',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.creatorId()
  },
})
