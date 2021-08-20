
class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [:show, :update, :destroy ]
  #before_action :authenticate_user!


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

      if @bookmark.save
        render json: {
          data: resource
        }
      else
        render json: {error: @bookmark.errors.messages}, status: 422
      end

  end

  # PATCH/PUT /bookmarks/1 or /bookmarks/1.json
  def update
    @bookmark = Bookmark.find_by(id: params[:id])

      if @bookmark.update(bookmark_params)
        render json: BookmarkSerializer.new(@bookmark).serialized_json
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
      params.require(:bookmark).permit(:headline, :web_url, :description, :favorite, :category_id, :id)
    end
end
