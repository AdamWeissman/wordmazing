class UserController < Api::V1::MasterController
  
  def create
    user = User.new(user_params)
  end

  def destroy
    user = User.find(User.last.id)
    user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name) 
  end

end