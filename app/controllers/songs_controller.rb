class SongsController < ApplicationController

    def new
        artist = Artist.find(params[:id])
        song = Song.new(artist_id: artist.id)
    end

    def create
        # binding.pry
        song = Song.new(song_params)
        # if song.save
        redirect_to song_path(song)
        # else 
        #     render 'new'
        # end
    end

    def show
        # song show page will display name, intro, verse, and chorus of selected song
        song = Song.find(params[:id])
        render json: SongSerializer.new(song, options)
    end

    private
    def song_params
      params.require(:song).permit(:name, :intro, :verse, :chorus, :body)
    end

end