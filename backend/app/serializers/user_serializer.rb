class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password
  has_many :categories
  has_many :bookmarks, through: :categories
end
