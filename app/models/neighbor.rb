class Neighbor < ApplicationRecord
    belongs_to :partner
    has_many :needs

    validates :name, :bio, :partner_id, presence: true
end
