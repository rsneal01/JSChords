class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :chords
  end