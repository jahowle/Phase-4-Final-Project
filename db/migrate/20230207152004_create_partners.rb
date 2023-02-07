class CreatePartners < ActiveRecord::Migration[7.0]
  def change
    create_table :partners do |t|

      t.timestamps
    end
  end
end
