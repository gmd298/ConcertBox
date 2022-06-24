class MusiciansController < ApplicationController
  def index
    render json: Musician.all
  end

  def show
    musician = Musician.find(params[:id])
    render json: musician
  end
end
