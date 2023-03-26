class Need < ApplicationRecord
    belongs_to :neighbor
    belongs_to :category 
    belongs_to :user
    has_many :donations
    has_many :donors, through: :donations

    validates :description, :amount, :neighbor_id, :category_id, :remaining_balance, presence: true
    validates :amount, numericality: {only_integer: true, less_than_or_equal_to: 400}

    validate :no_negative_balance
    # validate :no_blank_value, on: :need_donation

    def no_negative_balance
        if self.remaining_balance < 0
            errors.add(:amount, "too large")
        end
       
    end

    def no_blank_value
        if self.remaining_balance == self.remaining_balance_was
            errors.add(:amount, "can't be blank")
        end
    end

end
