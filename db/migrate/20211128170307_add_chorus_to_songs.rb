class AddChorusToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :chorus, :string
  end
end
