class AddFavoriteToBookmarks < ActiveRecord::Migration[6.1]
  def change
    add_column :bookmarks, :favorite, :boolean
  end
end
