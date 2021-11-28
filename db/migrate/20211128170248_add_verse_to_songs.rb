class AddVerseToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :verse, :string
  end
end
