class Api::V1::UsersController < ApplicationController
  #before_action :set_user_params, except: [:index, :create, :destroy]

  def index
    @users = User.all
    render json: @users
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def destroy
    @user = User.last
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end