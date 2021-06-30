class CreateApplicationPages < ActiveRecord::Migration[6.1]
  def change
    create_table :application_pages do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.string :address
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps
    end
  end
end
