class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.integer :donor_id
      t.integer :need_id
      t.integer :amount

      t.timestamps
    end
  end
end
