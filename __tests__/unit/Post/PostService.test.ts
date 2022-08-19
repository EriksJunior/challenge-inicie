import { PostService } from "../../../src/services/PostService"
import { GoRestProvider } from "../../../src/providers/GoRestProvider"
import { PostValidade } from "../../../src/validators/PostValidade"
import { PostEntity } from "../../../src/entities/PostEntity"

describe("Create a post", () => {
  const goRestProvider = new GoRestProvider()
  const postService = new PostService(goRestProvider, PostValidade)

  const mockPostData: PostEntity = {
    user_id: '3720',
    title: 'title test',
    body: 'body test'
  }


  it('Must be able to creates a new user post', async () => {
    const id = await postService.createsAuserPost(mockPostData)

    expect(id).toHaveProperty('id')
  })

  it('Must be able to find posts by user id', async () => {
    const posts = await postService.findPostByUserId(mockPostData.user_id)

    expect(posts).toEqual(expect.arrayContaining([]))
  })

  it('Must be able to find search for the latest', async () => {
    const posts = await postService.searchForTheLatest()

    expect(posts).toEqual(expect.arrayContaining([]))
  })
})