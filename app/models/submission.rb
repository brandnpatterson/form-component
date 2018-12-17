class Submission < ApplicationRecord
  validates :name, presence: true
  validates_uniqueness_of :email, presence: true
  validates :phone, presence: true
  validates :address, presence: true
  validates :cat, presence: true
  validates :dog, presence: true
end
