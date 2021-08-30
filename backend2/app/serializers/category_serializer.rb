class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  
  has_many :bookmarks
  belongs_to :user 
end
