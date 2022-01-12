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

  # def show
  #   # binding.pry
  #   artist = Artist.find(params[:id])
  #   render json: ArtistSerializer.new(artist)
  # end

  
  def create
    artist = Artist.new(artist_params)
    if artist.save
      render json: artist, status: :accepted
    else
      render json: {errors: artist.errors.full_messages}, status: :unprocessible_entity
    end
  end

  private
    def artist_params
      params.require(:artist).permit(:name, :body)
    end

end
