# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Test.destroy_all

Test.create(name: 'Test1')
Test.create(name: 'Test2')
Test.create(name: 'Test3')
Test.create(name: 'Test4')
Test.create(name: 'Test5')

puts 'Seeded 5'