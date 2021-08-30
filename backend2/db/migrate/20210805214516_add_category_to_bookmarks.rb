class AddCategoryToBookmarks < ActiveRecord::Migration[6.1]
  def change
    add_reference :bookmarks, :category, null: true, foreign_key: true
  end
end
