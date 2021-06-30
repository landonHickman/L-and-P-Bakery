class CreateAboutPages < ActiveRecord::Migration[6.1]
  def change
    create_table :about_pages do |t|
      t.string :title
      t.text :text
      t.string :image
      t.text :cta_title
      t.string :cta_button_text

      t.timestamps
    end
  end
end
