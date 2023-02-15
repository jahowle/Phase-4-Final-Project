class AddUserToNeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :needs, :user_id, :integer
  end
end
