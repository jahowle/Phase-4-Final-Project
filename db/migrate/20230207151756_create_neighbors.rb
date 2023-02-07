class CreateNeighbors < ActiveRecord::Migration[7.0]
  def change
    create_table :neighbors do |t|
      t.string :name
      t.string :bio
      t.integer :partner_id

      t.timestamps
    end
  end
end
