import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { StructureGuru } from './schemas/StructureGuru'
import { Galery } from './schemas/Galery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, StructureGuru, Galery],
}
