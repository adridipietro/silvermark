json.extract! bookmark, :id, :headline, :web_url, :description, :user_id, :created_at, :updated_at
json.url bookmark_url(bookmark, format: :json)
