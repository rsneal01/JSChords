class AddIntroToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :intro, :string
  end
end
