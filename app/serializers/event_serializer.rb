class EventSerializer < ActiveModel::Serializer
  attributes :id, :venue, :city

  belongs_to :musician
  belongs_to :user
end
