class Product < ApplicationRecord
  belongs_to :category

  def self.all_special_products
    select('products.id, name, image, price, description, special_item_carousel, category_id')
    .where('special_item_carousel = true')
  end

  def self.all_limited_time_cake_products
    @category = Category.find_by(name: 'Cakes')
    select('products.id, name, image, price, description, limited_time, category_id')
    .where('limited_time = true')
    .where('category_id = ?', @category.id);
  end

  def self.all_limited_time_boba_products
    @category = Category.find_by(name: 'Drinks')
    select('products.id, name, image, price, description, limited_time, category_id')
    .where('limited_time = true')
    .where('category_id = ?', @category.id);
  end

  def self.all_limited_time_bakery_products
    @category = Category.find_by(name: 'Bakery')
    select('products.id, name, image, price, description, limited_time, category_id')
    .where('limited_time = true')
    .where('category_id = ?', @category.id);
  end

end
