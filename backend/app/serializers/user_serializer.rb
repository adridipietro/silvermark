class UserSerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :password
  has_many :categories
  has_many :bookmarks, through: :categories
end
