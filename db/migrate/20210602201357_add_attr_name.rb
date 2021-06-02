class AddAttrName < ActiveRecord::Migration[6.1]
  def change
    add_column :tests, :name, :string
  end
end
