class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :destroy ]

  
  def index
      @categories = Category.all
      render json: @categories
  end
    
      # GET /categories/1 or /categories/1.json
  def show
        render json: category
  end
    
    
    
      # POST /categories or /categories.json
  def create
        category = Category.new(category_params)
    
        respond_to do |format|
          if category.save
            format.html { redirect_to category, notice: "category was successfully created." }
            format.json { render :show, status: :created, location: category }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: category.errors, status: :unprocessable_entity }
          end
        end
  end
    
    
      # DELETE /categories/1 or /categories/1.json
      def destroy
        category.destroy
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_category
          category = Category.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def category_params
          params.require(:category).permit(:name, :bookmarks, :user_id, :id)
        end
end
