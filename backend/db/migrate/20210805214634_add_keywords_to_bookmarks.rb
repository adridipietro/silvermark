class AddKeywordsToBookmarks < ActiveRecord::Migration[6.1]
  def change
    add_column :bookmarks, :keywords, :text
  end
end
