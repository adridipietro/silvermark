class Bookmark < ApplicationRecord
    belongs_to :category
    belongs_to :user

    validates :headline, presence: { message: "Name your bookmark!" }, length: {in: 1..40 }
    validates :web_url, presence: { message: "URL must be given" }
    validates :description, presence: { message: "Describe your bookmark!" }

    scope :most_recent, -> { order('created_at DESC') }
end
