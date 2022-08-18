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

  it('Must be able to creates a new comment', async () => {
    const id = await commentsService.createCommentOnPost(mockCommentData)

    expect(id).toHaveProperty('id')
  })

})