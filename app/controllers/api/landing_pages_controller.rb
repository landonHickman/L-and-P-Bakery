class Api::LandingPagesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :landing_page, only: [:update, :show]

  def index
    render json: LandingPage.all
  end

  def show
    render json: @landing_page
  end

  def update
    if @landing_page.update(landing_page_params)
      render json: @landing_page
    else
      render json: {errors: @landing_page}, status: 422
    end
  end

  private

  def landing_page
    @landing_page = LandingPage.find(params[:id])
  end

  def landing_page_params
    params.require(:landing_page).permit(
      :main_title, 
      :main_background_img, 
      :carousel_title, 
      :grid_title_1, 
      :grid_description_1, 
      :grid_title_2, 
      :grid_description_2
    )
  end
end



