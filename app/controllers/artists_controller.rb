class ArtistsController < ApplicationController

  def index
    artists = Artist.all
    # binding.pry
    render json: ArtistSerializer.new(artists)
  end

  def show
    # binding.pry
    artist = Artist.find(params[:id])
    render json: artist
  end

  private
    def artist_params
      params.require(:artist).permit(:body)
    end

end
