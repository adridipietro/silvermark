class BookmarkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :headline, :web_url, :description, :favorite, :keywords, :category_id

  belongs_to :category
end
