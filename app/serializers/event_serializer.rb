class EventSerializer < ActiveModel::Serializer
  attributes :id, :city

  belongs_to :musician
  belongs_to :user
end
