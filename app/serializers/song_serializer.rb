class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :intro, :verse, :chorus, :artist, :artist_id
    belongs_to :artist
  end