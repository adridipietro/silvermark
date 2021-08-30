class CreateBookmarks < ActiveRecord::Migration[6.1]
  def change
    create_table :bookmarks do |t|
      t.string :headline
      t.string :web_url
      t.string :description


      t.timestamps
    end
  end
end
