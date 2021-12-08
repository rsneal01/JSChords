class SongSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :artist
    attributes :name, :intro, :verse, :chorus
  end