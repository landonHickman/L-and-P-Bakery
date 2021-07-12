class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def create
    @category = Category.new(category_params)
    if (@category.save)
      render json: @category
    else
      render json: {errors: @category.errors}, status: :unprocessable_entity      
    end
  end

  def update
    @category = Category.find(params[:id])
    if (@category.update(category_params))
      render json: @category
    else
      render json: {errors: @category.errors}, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private
  def category_params
    params.require(:category).permit(:category_id, :product_id)
  end

end

