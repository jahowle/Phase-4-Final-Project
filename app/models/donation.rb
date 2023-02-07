class Donation < ApplicationRecord
    belongs_to :need
    belongs_to :donor
end
