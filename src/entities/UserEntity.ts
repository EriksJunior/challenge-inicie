class UserEntity {
  id?: string | number
  name: string
  email: string
  gender: string
  status: string


  constructor(body: UserEntity) {
    this.id = body.id
    this.name = body.name
    this.email = body.email
    this.gender = body.gender.toLowerCase()
    this.status = body.status.toLowerCase()
  }
}

export { UserEntity }