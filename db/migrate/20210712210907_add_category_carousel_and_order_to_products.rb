class AddCategoryCarouselAndOrderToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :category_carousel, :boolean
    add_column :products, :order, :integer
  end
end
