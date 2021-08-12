class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]

  def index 
    @users = User.all
    render json: @users
  end
  

  # GET /users/1 or /users/1.json
  def show
    render json: @user
  end


  # POST /users or /users.json
  def create
    user = User.new(user_params)

    respond_to do |format|
      if user.save
        format.html { redirect_to user, notice: "User was successfully created." }
        format.json { render :show, status: :created, location: user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :categories, :bookmarks, :id)
    end
end
