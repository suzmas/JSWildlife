class Sighting < ApplicationRecord
  belongs_to :animal
  validates :date, presence: true
  validates :lat, presence: true
  validates :long, presence: true
  validates :region, presence: true
  validates :animal_id, presence: true
end
