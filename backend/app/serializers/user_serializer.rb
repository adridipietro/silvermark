class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :email, :password
  has_many :categories
  has_many :bookmarks, through: :categories
end
