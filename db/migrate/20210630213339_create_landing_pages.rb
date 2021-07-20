class CreateLandingPages < ActiveRecord::Migration[6.1]
  def change
    create_table :landing_pages do |t|
      t.string :main_title
      t.string :main_background_img
      t.string :carousel_title
      t.string :grid_title_1
      t.text :grid_description_1
      t.string :grid_title_2
      t.text :grid_description_2
      t.string :grid_title_3
      t.text :grid_description_3

      t.timestamps
    end
  end
end
