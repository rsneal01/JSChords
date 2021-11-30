class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :intro, :verse, :chorus
  end