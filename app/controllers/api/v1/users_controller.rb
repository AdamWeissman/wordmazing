class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end
  
  def create
    session.clear
    @user = User.new(user_params)
    session[:user_id] = @user.id
    if @user.save
      render json: @user
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def destroy
    @user = User.last
    if session[:user_id] == @user.id
      session.clear
      @user.destroy
    else
      @user.destroy
    end
  end


  def the_session
    @user = User.find_by(session[:user_id])
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end