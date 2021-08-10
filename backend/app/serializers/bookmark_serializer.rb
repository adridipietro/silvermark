class BookmarkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :headline, :web_url, :description, :favorite

  belongs_to :category

end
