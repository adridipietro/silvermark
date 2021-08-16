class UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]
  skip_before_action :authorized, only: [:create]

  

  # GET /users/1 or /users/1.json
  def show
    render json: @user
  end


  # POST /users or /users.json
  def create
    @user = User.new(user_params)

      if @user.valid?
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :created
      else
        render json: { error: 'Failed to create your account. Try again!'}
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
      params.require(:user).permit(:name, :email, :password, :categories, :bookmarks, :id, :jwt)
    end
end
