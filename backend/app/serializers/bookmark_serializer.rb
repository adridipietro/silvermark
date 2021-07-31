class BookmarkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :headline, :web_url, :description
end
