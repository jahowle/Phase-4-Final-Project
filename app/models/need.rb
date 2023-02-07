class Need < ApplicationRecord
    belongs_to :neighbor
    belongs_to :category 
    has_many :donations
    has_many :donors, through: :donations

end
