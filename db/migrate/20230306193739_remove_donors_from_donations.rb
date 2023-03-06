class RemoveDonorsFromDonations < ActiveRecord::Migration[7.0]
  def change
    remove_column :donations, :donor_id
  end
end
