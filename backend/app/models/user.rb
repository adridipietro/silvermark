class User < ApplicationRecord
    has_many :categories
    has_many :bookmarks, through: :categories

    has_secure_password
    validates :name, presence: { message: "Name must be given" }
    validates :email, presence: { message: "Email must be given" }, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
