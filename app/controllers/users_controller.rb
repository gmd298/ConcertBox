class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :update]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def edit
    user = User.find(params[:id])
    user.update(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user, status: :deleted
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end