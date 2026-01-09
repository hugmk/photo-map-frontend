import { User } from './user.model'
import { Comment } from './comment.model'

export interface Photo {
  id: number
  userId: number
  imageUrl: string
  latitude: string
  longitude: string
  createdAt: string
  updatedAt: string
  user?: User
  comments?: Comment[]
}
