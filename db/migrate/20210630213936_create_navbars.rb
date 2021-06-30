class CreateNavbars < ActiveRecord::Migration[6.1]
  def change
    create_table :navbars do |t|
      t.string :nav_logo
      t.string :nav_text_1
      t.string :nav_text_2
      t.string :nav_text_3

      t.timestamps
    end
  end
end
