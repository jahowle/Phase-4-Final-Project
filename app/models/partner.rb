class Partner < ApplicationRecord
    belongs_to :location
    has_many :neighbors
    has_many :users
    has_many :needs, through: :neighbors

    validates :name, :location_id, presence: true
end
