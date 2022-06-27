class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def create
    event = Event.create!(event_params)   
    render json: event, status: :created
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
    event.destroy.all
    head :no_content 
  end

  private

  def event_params
    params.permit(:city, :musician_id, :user_id)
  end
end
