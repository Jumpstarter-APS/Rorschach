class PostsController < ApplicationController
    def index
      posts = Post.all
      render json: posts
    end

    def show
      post = Post.find(params[:id])
      render json: post
    end

    def create
      post = Post.create(post_params)
      if post.valid?
        render json: post
      else
        render json: post.errors, status: :unprocessable_entity
      end
      
    end
    # def update
    #   post = Post.find(params[:id])
    #   post.update(post_params)
    #   if apartment.valid?
    #     render json: post
    #   else
    #     render json: post.errors, status: :unprocessable_entity
    #   end
    # end
    def destroy
      post = Post.find(params[:id])
      post.destroy
      if post.valid?
        render json: post
      else
        render json: post.errors, status: :unprocessable_entity
      end
    end
    private
    #  Posts have: user_id, pic url, and description
    def post_params
      params.require(:post).permit(:user_id, :pic, :des)
    end
end
