class CreateFooters < ActiveRecord::Migration[6.1]
  def change
    create_table :footers do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone_number
      t.string :email
      t.string :social_media_logo_1
      t.string :social_media_url_1
      t.string :social_media_logo_2
      t.string :social_media_url_2
      t.string :social_media_logo_3
      t.string :social_media_url_3

      t.timestamps
    end
  end
end
