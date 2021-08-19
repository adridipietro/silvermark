class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :email, :encrypted_password
  has_many :categories
  has_many :bookmarks, through: :categories
end
