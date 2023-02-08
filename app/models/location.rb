class Location < ApplicationRecord
    has_many :partners
    has_many :neighbors
    has_many :needs, through: :neighbors

    validates :name, presence: true
end
