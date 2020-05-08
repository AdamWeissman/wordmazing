class Api::V1::SessionsController < ApplicationController #this is unmodified code from my Phrase Ninja App so I can have an admin alter data as opposed to dealing with a seed file once it's live on heroku and netlify
  skip_before_action :require_login
  # def new
  #   @user = User.new
  #   render :login
  # end

  def create
    @user = User.last
    session[:user_id] = @user.id
  end


  #this is for logout
  def destroy
    session.clear
    #session.reset
    redirect_to '/'
  end
