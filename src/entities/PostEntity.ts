class PostEntity {
  id?: string
  user_id: string
  title: string
  body: string

  constructor(body: PostEntity) {
    this.id = body.id
    this.user_id = body.user_id
    this.title = body.title
    this.body = body.body
  }
}

export { PostEntity }