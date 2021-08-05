class User < ApplicationRecord
    has_many :categories
    has_many :bookmarks, through: :categories
end
