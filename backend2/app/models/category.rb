class Category < ApplicationRecord
  has_many :bookmarks

  validates :name, presence: { message: "Name must be given" }, uniqueness: true
end
