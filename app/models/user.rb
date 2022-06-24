class User < ApplicationRecord
  has_many :events
  has_many :musicians, through: :events
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
end