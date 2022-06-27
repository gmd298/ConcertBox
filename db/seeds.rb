require 'faker'

griffin = User.create(
  username: 'griffin',
  password: 'asdfasdf')

10.times do
  musician = Musician.create(name: Faker::Music::band)
  10.times do
    Event.create(
      musician_id: musician.id,
      user_id: griffin.id, 
      city: Faker::Nation.capital_city)
    end
end