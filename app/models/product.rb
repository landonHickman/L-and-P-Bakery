class Product < ApplicationRecord
  belongs_to :category

  def self.all_special_products
    select('products.id, name, image, price, description, special_item_carousel, category_id')
    .where('special_item_carousel = true')
  end
end
