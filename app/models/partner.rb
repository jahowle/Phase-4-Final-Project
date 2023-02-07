class Partner < ApplicationRecord
    belongs_to :location
    has_many :neighbors
    has_many :needs, through: :neighbors
end
