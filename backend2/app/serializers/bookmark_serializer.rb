class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :headline, :web_url, :description, :favorite, :category_id

  belongs_to :category, serializer: CategorySerializer
end
