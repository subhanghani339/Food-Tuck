import { type SchemaTypeDefinition } from 'sanity'
import user from './user'
import product from './product'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    user,
    product,
    blog,
  ],
}
