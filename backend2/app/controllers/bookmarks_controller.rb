
class BookmarksController < ApplicationController
  before_action :set_bookmark, only: [:show, :update, :destroy]
  

  # GET /bookmarks or /bookmarks.json
  def index
    bookmarks = Bookmark.all.most_recent
    render json: bookmarks
  end

  # GET /bookmarks/1 or /bookmarks/1.json
  def show
    render json: @bookmark
  end


  # POST /bookmarks or /bookmarks.json
  def create
    
    @bookmark = Bookmark.new(headline: params[:headline], description: params[:description], web_url: params[:web_url], category_id: params[:category_id])
      if @bookmark.save
        render json: @bookmark, status: :created
      else
        render json: {error: @bookmark.errors.messages}, status: 422
      end

  end

  def update
    #byebug
    if @bookmark.update(bookmark_params)
      render json: @bookmark
    else
      render json: @bookmark.errors, status: :unprocessable_entity
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
      params.require(:bookmark).permit(:headline, :web_url, :description, :favorite, :category_id)
    end


end
