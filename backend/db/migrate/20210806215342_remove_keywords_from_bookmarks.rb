class RemoveKeywordsFromBookmarks < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookmarks, :keywords, :text
  end
end
