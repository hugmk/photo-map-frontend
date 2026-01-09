import { User } from "./user.model"

export interface Comment {
  id: number
  userId: number
  photoId: number
  content: string
  createdAt: string
  updatedAt: string
  user: User
}
