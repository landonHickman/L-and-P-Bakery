class Api::ProductsController < ApplicationController
  # before_action :set_category
   before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
      render json: Product.all
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end
end