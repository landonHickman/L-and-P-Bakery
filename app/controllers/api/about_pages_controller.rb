class Api::AboutPagesController < ApplicationController
  before_action :about_pages, only: [:update]

  def index
    render json: AboutPage.all
  end

  def show
    render json: @about_pages
  end

  def update
    if(@about_pages.update(about_pages_params))
      render json: @about_pages
    else
      render json: @about_pages.errors, status: :unprocessable_entity
    end
  end

private

  def about_pages
    @about_pages = AboutPage.find (params[:id])
  end

  def about_pages_params
    params.require(:about_page).permit(:title, :text, :image, :cta_title, :cta_button_text)
  end
end