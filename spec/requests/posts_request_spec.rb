require 'rails_helper'

RSpec.describe "Posts", type: :request do
let (:user) {User.create email: 'test@test.com', password:'test111'}

# index
it 'shows all posts' do
    Post.create user_id: user.id, pic: 'www.picture.com', des: 'random picture'
    get '/posts'
    posts = JSON.parse(response.body)

    expect(posts.length).to eq 1
    expect(response).to have_http_status(200)
end

it 'it creates a new posts' do
    post_params = {
        post: {
            pic: 'www.picture.com',
            des: 'random pic',
            user_id: user.id
        }
    }
    post '/posts', params: post_params
    post = Post.first

    expect(post.des).to eq 'random pic'
    expect(response).to have_http_status(200)
end 

# -----delete-----
it 'deletes a post' do
    post_params = {
      post: {
        pic: 'www.picture.com',
        des: 'random pic',
        user_id: user.id
      }
    }
    post '/posts', params: post_params
    post = Post.first
    delete "/posts/#{post.id}"
    posts = Post.all

    expect(posts).to be_empty
    expect(response).to have_http_status(200)
  end




end
