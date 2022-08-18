import { PostService } from "../../../src/services/PostService"
import { GoRestProvider } from "../../../src/providers/GoRestProvider"
import { PostValidade } from "../../../src/validators/PostValidade"
import { PostEntity } from "../../../src/entities/PostEntity"

describe("Create a post", () => {
  const goRestProvider = new GoRestProvider()
  const postService = new PostService(goRestProvider, PostValidade)

  const mockUPostData: PostEntity = {
    user_id: '1776',
    title: 'title test',
    body: 'body test'
  }


  it('Must be able to creates a new user post', async () => {
    const id = await postService.createsAuserPost(mockUPostData)

    expect(id).toHaveProperty('id')
  })

  it('Must be able to find posts by user id', async () => {
    const posts = await postService.findPostByUserId(mockUPostData.user_id)

    expect(posts).toEqual(expect.arrayContaining([]))
  })

  it('Must be able to find all posts from public list', async () => {
    const posts = await postService.findAllPostsFromPublicList()

    expect(posts).toEqual(expect.arrayContaining([]))
  })
})