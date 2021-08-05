class BookmarkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :headline, :web_url, :description

  belongs_to :category
end
