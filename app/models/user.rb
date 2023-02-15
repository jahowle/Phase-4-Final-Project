class User < ApplicationRecord
    belongs_to :partner 
    has_many: needs
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
