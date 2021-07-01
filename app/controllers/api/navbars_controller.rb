class Api::NavbarsController < ApplicationController
  before_action :set_navbar, only: [:show, :update]

  def index
    render json: Navbar.all
  end

  def show
    render json:@navbar
  end

  def update
    if(@navbar.update(navbar_params))
      render json: @navbar
    else
      render json: {errors: @navbar}, status: 422
    end
  end

  private

  def navbar_params
    params.require(:navbar).permit(:nav_logo, :nav_text_1, :nav_text_2, :nav_text_3)
  end

  def set_navbar
    @navbar = Navbar.find(params[:id])
  end

end



