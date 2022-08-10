import http from "../config/baseUrl";

class GoRestProvider {

  async findById(id: string): Promise<string> {
    const { data } = await http.get(`/users/${id}`)
    return data
  }

  async findAll(): Promise<Array<object>> {
    const { data } = await http.get(`/users`)
    return data
  }

  async create(value: any): Promise<string> {
    const { data } = await http.post('/users', value)
    return data.id
  }
}

export { GoRestProvider }