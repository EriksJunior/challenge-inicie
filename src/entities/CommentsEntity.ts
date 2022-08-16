class CommentsEntity {
  id?: string
  post_id: string | undefined
  name: string
  email: string
  body: string

  constructor(body: CommentsEntity) {
    this.id = body.id
    this.post_id = body.post_id
    this.name = body.name
    this.email = body.email
    this.body = body.body
  }
}

export { CommentsEntity }