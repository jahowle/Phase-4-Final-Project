class Donation < ApplicationRecord
    belongs_to :need
    belongs_to :donor

    validates :donor_id, :need_id, :amount, presence: true
    validate :no_negative_balance

    def no_negative_balance
        new_balance = need.remaining_balance - amount
        if new_balance < 0
            errors.add(:amount, "too large")
        end
    end

    def update_need_balance
        balance = self.need.remaining_balance - self.amount
        self.need.update(remaining_balance: balance)
        if balance == 0
            self.need.update(funded: true)
        end
    end
end
