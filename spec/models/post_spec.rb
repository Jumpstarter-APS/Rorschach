require 'rails_helper'

RSpec.describe Post, type: :model do

  let (:user) {User.create email: 'test@test.com', password:'test111'}

  it 'should have a valid description' do
    post = Post.create user_id: user.id, pic: 'www.picture.com'
    expect(post.errors[:des]).to include "can't be blank"
  end


  it 'should have a valid picture' do
    post = Post.create user_id: user.id, des: 'random pic'
    expect(post.errors[:pic]).to include "can't be blank"
  end

  it 'should have a valid user id' do
    post = Post.create pic: 'www.picture.com', des: 'random pic'
    expect(post.errors[:user_id]).to include "can't be blank"
  end

  it 'should have a description over three characters' do
    post = Post.create(user_id: user.id, pic: 'www.picture.com', des: 'rk')
    expect(post.errors[:des]).to_not be_empty 
  end




end
