class Api::FootersController < ApplicationController
  before_action :set_footer, only: [:update]

  def index
    render json: Footer.all
  end

  def update
    if @footer.update(footer_params)
      render json: @footer
    else
      render json: {errors: @footer}, status: 422
    end
  end

  def set_footer
    @footer = Footer.find(params[:id])
  end

  def footer_params
    params.require(:footer).permit(
      :address, 
      :city, 
      :state, 
      :zip, 
      :phone_number, 
      :email, 
      :social_media_logo_1,
      :social_media_logo_2,
      :social_media_logo_3,
      :social_media_url_1,
      :social_media_url_2,
      :social_media_url_3,
    )
  end
end



