require 'faker'

10.times do
  Musician.create(
    name: Faker::Music::band)
  end

10.times do
  Event.create(
    city: Faker::Nation.capital_city)
  end

10.times do
  User.create(
    username: Faker::Restaurant.name)
  end