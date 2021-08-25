class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy ]



  def index
      @categories = Category.all
      render json: @categories
  end
    
      # GET /categories/1 or /categories/1.json
  def show
        render json: @category
  end
    
    
    
      # POST /categories or /categories.json
    def create
      #byebug
        @category = Category.new(category_params)
        @category.user = User.find_by_id(current_user.id)
        if @category.save
          render json: @category, status: :created
        else
          render json: {error: @category.errors.messages}, status: 422
        end
        
    end

    
    
      # DELETE /categories/1 or /categories/1.json
  def destroy
      @category.destroy
  end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_category
          @category = Category.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def category_params
          params.require(:category).permit!
        end
end
