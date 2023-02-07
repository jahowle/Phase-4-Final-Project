class Neighbor < ApplicationRecord
    belongs_to :partner
    has_many :needs
end
