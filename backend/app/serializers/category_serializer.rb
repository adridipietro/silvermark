class CategorySerializer < ActiveModel::Serializer
  #include FastJsonapi::ObjectSerializer
  attributes :id, :name, :user_id
  
  has_many :bookmarks
  belongs_to :user, serializer: UserSerializer
end
