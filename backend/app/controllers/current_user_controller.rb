class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: current_user, status: :ok
  end

  def current_user_params
    params.require(:current_user).permit!
  end
end
