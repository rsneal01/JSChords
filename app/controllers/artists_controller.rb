class ArtistsController < ApplicationController

  def index
    artists = Artist.all
     #binding.pry
    render json: ArtistSerializer.new(artists)
   
  #   options = {
  #     include: [:songs]
  # }
  # render json: ArtistSerializer.new(artists, options)
  end

  def show
    # binding.pry
    artist = Artist.find(params[:id])
    render json: ArtistSerializer.new(artist)
  end

  private
    def artist_params
      params.require(:artist).permit(:name, :body)
    end

end
