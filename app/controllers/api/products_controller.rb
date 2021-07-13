class Api::ProductsController < ApplicationController
  # before_action :set_category
   before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
      render json: Product.all
  end

  def all_special_products
    render json: Product.all_special_products
  end

  def all_limited_time_cake_products
    render json: Product.all_limited_time_cake_products
  end

  def all_limited_time_boba_products
    render json: Product.all_limited_time_boba_products
  end

  def show
    product = @category.products.find(params[:id])
    render json: product
  end


  def create
    @product = @category.products.new(product_params)

    if @product.save
      render json: @product
    else
      render :new
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render :edit
    end
  end

  def destroy
    
    render json: @product.destroy
  end


  private
    def set_category
      @category = Category.find(params[:category_id])
    end

    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :description, :image, :price, :limited_time, :special_item_carousel)
    end
end
   
