# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create email: 'test@gmail.com', password: '123456', password_confirmation: '123456'
posts = [
    {
      user_id: user.id,
      pic: 'https://source.unsplash.com/random',
      des: 'This is an aweomse picutre of stuff.'  
    },
    {
      user_id: user.id,
      pic: 'https://source.unsplash.com/random',
      des: 'This is an aweomse picutre of stuff.'  
    },
    {
      user_id: user.id,
      pic: 'https://source.unsplash.com/random',
      des: 'This is an aweomse picutre of stuff.'  
    }
]
posts.each do |attr|
    Post.create attr
    puts "creating post: #{attr}"
end