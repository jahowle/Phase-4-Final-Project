class Donation < ApplicationRecord
    belongs_to :need
    belongs_to :donor

    validates :donor_id, :need_id, :amount, presence: true
    # How do I validate that the amount is less than or equal to the remaining balance?

    def update_need_balance
        balance = self.need.remaining_balance - self.amount
        self.need.update(remaining_balance: balance)
        # puts [self.need.remaining_balance]
    end
end
