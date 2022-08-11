class PostEntity {
  id?: string
  userId: string
  title: string
  body: string

  constructor(body: PostEntity) {
    this.id = body.id
    this.userId = body.userId
    this.title = body.title
    this.body = body.body
  }
}

export { PostEntity }