
class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [:show,  :destroy]
  include Devise::Controllers::Helpers 



  # GET /bookmarks or /bookmarks.json
  def index
    @bookmarks = Bookmark.all.most_recent
    render json: @bookmarks
  end

  # GET /bookmarks/1 or /bookmarks/1.json
  def show
    render json: @bookmark
  end


  # POST /bookmarks or /bookmarks.json
  def create
    
    @bookmark = Bookmark.new(headline: params[:headline], description: params[:description],web_url: params[:web_url], category_id: params[:category_id])
    @bookmark.user = User.find_by_id(current_user.id)
      if @bookmark.save
        render json: @bookmark, status: :created
      else
        render json: {error: @bookmark.errors.messages}, status: 422
      end

  end


  # DELETE /bookmarks/1 or /bookmarks/1.json
  def destroy
    @bookmark.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bookmark
      
      @bookmark = Bookmark.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bookmark_params
      params.require(:bookmark).permit!
    end
end
