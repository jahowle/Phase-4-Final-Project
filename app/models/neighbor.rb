class Neighbor < ApplicationRecord
    belongs_to :partner
    has_many :needs
    has_many :users, through: :needs

    validates :name, :bio, :partner_id, presence: true
end
