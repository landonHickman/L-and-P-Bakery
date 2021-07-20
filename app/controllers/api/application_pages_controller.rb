class Api::ApplicationPagesController < ApplicationController
before_action :authenticate_user!, only: [:destroy]
before_action :set_application_pages, only: [:show, :update, :destroy]

  def index
    render json: ApplicationPage.all
  end

  def show
     render json: @application_page
  end

  def create
    @application_page = ApplicationPage.new(application_page_params)
      if @application_page.save
        render json: @application_page
      else
        render :new
      end
  end

  def update
    if @application_page.update(application_params)
      render json: @application_page
    else
      render json: {errors: @application_page}, status: 422
    end
  end

  def destroy
    render json: @application_page.destroy
  end

  private

    def set_application_pages
      @application_page = ApplicationPage.find(params[:id])
    end

    def application_page_params
      params.require(:application_page).permit(:first_name, :last_name, :email, :phone_number, :address, :city, :state, :zip )
    end

end
