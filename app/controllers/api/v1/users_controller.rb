class Api::V1::UsersController < ApplicationController


  @@fake_session = {}


  def destroy

    #the code below is semi redundant, destroying the user will also destroy the session, but in case I want to split the functionality, both lines of code are included below
    if @user = User.find_by(id: (@@fake_session[:duct_tape]).to_i)
      @@fake_session[:duct_tape] = nil
      @user.destroy
    else
      @user = User.last
      @user.destroy
    end
  end

  def index
    @users = User.all
    render json: @users
  end
  
  def create
    if @@fake_session[:duct_tape] == nil 
      @user = User.new(user_params)
      if @user.save
        @@fake_session[:duct_tape] = @user.id
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
    @user = User.find_by(id: (@@fake_session[:duct_tape]).to_i)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end