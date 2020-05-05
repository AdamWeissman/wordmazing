class Api::V1::SessionsController < ApplicationController #this is unmodified code from my Phrase Ninja App so I can have an admin alter data as opposed to dealing with a seed file once it's live on heroku and netlify
  skip_before_action :require_login

  def new
    @user = User.new
    render :login
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to situations_path
    else
      flash[:error] = "Sorry #{User.find_by(email: params[:user][:email]).email}, your password is incorrect!"
      redirect_to '/login'
    end
  end


  #this is for logout
  def destroy
    session.clear
    #session.reset
    redirect_to '/'
  end
