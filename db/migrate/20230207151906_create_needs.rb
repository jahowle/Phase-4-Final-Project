class CreateNeeds < ActiveRecord::Migration[7.0]
  def change
    create_table :needs do |t|
      t.string :description
      t.integer :amount
      t.integer :neighbor_id
      t.integer :category_id
      t.boolean :funded

      t.timestamps
    end
  end
end
