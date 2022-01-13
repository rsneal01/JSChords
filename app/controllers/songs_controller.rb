class SongsController < ApplicationController

    def index
        songs = Song.all
         #binding.pry
        render json: SongSerializer.new(songs)
    end

    def create
    song = Song.new(song_params)
    if song.save
      render json: song, status: :accepted
    else
      render json: {errors: song.errors.full_messages}, status: :unprocessible_entity
    end
  end

    private
    def song_params
      params.require(:song).permit(:name, :artist_id)
    end

end