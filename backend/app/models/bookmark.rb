class Bookmark < ApplicationRecord
    belongs_to :category

    validates :headline, presence: true, length: {in: 1..40 }

    scope :most_recent, -> { order('created_at DESC') }
end
