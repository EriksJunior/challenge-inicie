import { CommentsService } from "../../../src/services/CommentsService"
import { GoRestProvider } from "../../../src/providers/GoRestProvider"
import { CommentsValidate } from "../../../src/validators/CommentsValidate"
import { CommentsEntity } from "../../../src/entities/CommentsEntity"

describe("Create a comments", () => {
  const goRestProvider = new GoRestProvider()
  const commentsService = new CommentsService(goRestProvider, CommentsValidate)

  const mockCommentData: CommentsEntity = {
    post_id: 1,
    name: "test123",
    email: "trest@123.com",
    body: "testttttttttttt"
  }

  const mockPostDataFromFistPost: CommentsEntity = {
    name: "test",
    email: "trest@1.com",
    body: "test post public list"
  }

  it('Must be able to creates a new comment', async () => {
    const id = await commentsService.createCommentOnPost(mockCommentData)

    expect(id).toHaveProperty('id')
  })

  it('Must be able to creates a new comment in the first post in list public', async () => {
    const id = await commentsService.createCommentTheFirstPostInListPublic(mockPostDataFromFistPost)

    expect(id).toHaveProperty('id')
  })

  it('Must be able to find comments by public post id', async () => {
    const publicPosts = await commentsService.findCommentsByPublicPostId(mockCommentData.post_id as number)

    expect(publicPosts).toEqual(expect.arrayContaining([]))
  })

  it('Must be able to delete comment by id', async () => {
    const id = 1928

    const statusCode = await commentsService.deleteComment(id)

    expect(statusCode.status).toEqual(204)
  })

})