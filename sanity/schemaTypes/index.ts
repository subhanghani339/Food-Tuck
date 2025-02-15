import { type SchemaTypeDefinition } from 'sanity'
import user from './user'
import product from './product'
import blog from './blog'
import parentProductCategories from './parentProductCategories'
import childProductCategories from './childProductCategories'
import contact from './contact'
import order from './order'
import cart from './cart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    user,
    product,
    blog,
    contact,
    parentProductCategories,
    childProductCategories,
    order,
    cart,
  ],
}
