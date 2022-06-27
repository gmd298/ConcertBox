class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def update
    event = Event.find(params[:id])
    event.update(venue: params[:event],
      city: params[:event][:city])
      render json: event
  end

  def destroy
    event = Event.find(params[:id])
    event.delete.all
    head :no_content 
  end
end
