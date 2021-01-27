class Post < ApplicationRecord
    belongs_to :user
    validates :des, :pic, :user_id, presence: true
    validates :des, length: { minimum: 5 }

    # validations
end
