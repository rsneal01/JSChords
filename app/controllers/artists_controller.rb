class ArtistsController < ApplicationController

  def index
    artists = Artist.all
    # binding.pry
    render json: artists
  end

  private
    def artist_params
      params.require(:artist).permit(:body)
    end

end
