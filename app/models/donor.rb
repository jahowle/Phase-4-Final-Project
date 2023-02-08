class Donor < ApplicationRecord
    has_many :donations
    has_many :needs, through: :donations

    validates :name, presence: true
end
