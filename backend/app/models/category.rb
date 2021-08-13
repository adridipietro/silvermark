class Category < ApplicationRecord
  belongs_to :user
  has_many :bookmarks

  validates :name, presence: { message: "Name must be given" }, uniqueness: true
end
