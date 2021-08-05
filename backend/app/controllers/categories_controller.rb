class CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show destroy ]
  
  def index
        categories = Category.all
        
        render json: CategorySerializer.new(categories).serialized_json
  end
    
      # GET /categories/1 or /categories/1.json
  def show
        render json: CategorySerializer.new(category)
  end
    
      # GET /categories/new
  def new
        @category = Category.new
  end
    
    
      # POST /categories or /categories.json
  def create
        @category = Category.new(category_params)
    
        respond_to do |format|
          if @category.save
            format.html { redirect_to @category, notice: "category was successfully created." }
            format.json { render :show, status: :created, location: @category }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: @category.errors, status: :unprocessable_entity }
          end
        end
  end
    
    
      # DELETE /categories/1 or /categories/1.json
      def destroy
        @category.destroy
        respond_to do |format|
          format.html { redirect_to categories_url, notice: "category was successfully destroyed." }
          format.json { head :no_content }
        end
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_category
          @category = Category.find(params[:id])
        end
    
        # Only allow a list of trusted parameters through.
        def category_params
          params.require(:category).permit(:name, :bookmarks, :user_id)
        end
end
