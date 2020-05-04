class UsersController < Api::V1::MasterController
  
  def index
    @users = User.all
    render json: @users
  end


  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: accepted
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def destroy
    @user = User.find(User.last.id)
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end