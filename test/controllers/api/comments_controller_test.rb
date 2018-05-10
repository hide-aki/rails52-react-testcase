require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @comment = comments(:one)
  end

  test "should get index" do
    get api_comments_url, as: :json
    assert_response :success
  end

  test "should create comment" do
    assert_difference('Comment.count') do
      post api_comments_url, params: { comment: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show comment" do
    get api_comment_url(@comment), as: :json
    assert_response :success
  end

  test "should update comment" do
    patch api_comment_url(@comment), params: { comment: {  } }, as: :json
    assert_response 200
  end

  test "should destroy comment" do
    assert_difference('Comment.count', -1) do
      delete api_comment_url(@comment), as: :json
    end

    assert_response 204
  end
end
