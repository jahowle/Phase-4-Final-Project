class AddRemainingBalanceToNeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :needs, :remaining_balance, :integer
  end
end
