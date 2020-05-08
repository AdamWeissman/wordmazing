class Api::V1::UsersController < ApplicationController

  #note: quintus is just a nonsense word for session, because I was originally testing with user_id and thought maybe that's why something was going wrong


  def destroy
    @user = User.find_by(session[:quintus])

    @user.destroy
  end

  def index
    @users = User.all
    render json: @users
  end
  
  def create
    
    if session[:quintus] == nil 
      @user = User.new(user_params)
      session[:quintus] = @user.id
      if @user.save
        render json: @user
      else
        render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
      end
    else
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
      end
    end
  end

  def the_session
    @user = User.find_by(session[:quintus])
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end