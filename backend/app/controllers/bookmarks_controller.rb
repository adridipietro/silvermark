
class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [:show,  :destroy]



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
    @bookmark = Bookmark.new(bookmark_params)
    @user.bookmark = User.find_by_id(current_user.id)
    @user.categories[category_id].bookmark << @bookmark
    byebug
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
      params.require(:bookmark).permit(:headline, :web_url, :description, :category_id, :id)
    end
end
