# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Test.destroy_all
User.destroy_all
Category.destroy_all
Product.destroy_all
LandingPage.destroy_all
AboutPage.destroy_all
Footer.destroy_all
Navbar.destroy_all

random_boolean = [true, false]


User.create(first_name: 'L', last_name: 'P', email: 'landp@bakery.com', password: '1234567890', admin: true)

drinks = Category.create(name:'Drinks')
bakery = Category.create(name: 'Bakery')
cakes = Category.create(name: 'Cakes')

# i = 4
15.times do |i|
  drinks.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample,
    category_carousel: random_boolean.sample,
    order: i + 1,
   )
end

# x = 4
15.times do |x|
  bakery.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample,
    category_carousel: random_boolean.sample,
    order: x + 1,
   )
end

# y = 4
15.times do |y|
  cakes.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample,
    category_carousel: random_boolean.sample,
    order: y + 1,
   )
end
# need to add landingPage special_bakery_item pic title price
LandingPage.create(
  main_title: 'L & P Bakery', 
  main_background_img: 'https://www.ocregister.com/wp-content/uploads/2020/09/bakery-02-1.jpg', 
  carousel_title: 'Special Bakery Items', 
  grid_title_1: 'Cakes', 
  grid_description_1: Faker::Lorem.paragraph, 
  grid_title_2: 'Drinks', 
  grid_description_2: Faker::Lorem.paragraph,
  grid_title_3: 'Bakery',
  grid_description_3: Faker::Lorem.paragraph,
)

AboutPage.create(
  title: 'Our Story',
  text: 'Loam Bakery started in 2010 as two friends searching for the perfect balance of flour, water, and salt. Loam Bakery now sells a daily selection of breads and pastries both online and in-store.',
  image: '',
  cta_title: 'At L&P Bakery Cafe, we’re always looking for talented individuals to join our team',
  cta_button_text: 'Apply Now',
)

Footer.create(
  address: '895 E 9400 S', 
  city: 'Sandy',
  state: 'Utah',
  zip: '84094',
  phone_number: '801-679-1018',
  email: 'landpbakerycafe@gmail.com',
  social_media_logo_1: 'https://res.cloudinary.com/landonhickman/image/upload/v1626988671/Facebook_ffbhzu.png',
  social_media_url_1: 'https://www.facebook.com/landpbakerycafe',
  social_media_logo_2: 'https://res.cloudinary.com/landonhickman/image/upload/v1626988483/SnapChat_tpjsys.png',
  social_media_url_2: 'https://www.snapchat.com/add/landpbakerycafe',
  social_media_logo_3: 'https://res.cloudinary.com/landonhickman/image/upload/v1626988662/Instagram_yamvpw.png',
  social_media_url_3: 'https://www.instagram.com/landpbakerycafe/?hl=en',
)

Navbar.create(
  nav_logo: 'https://i.imgur.com/ViaAZKy.jpg',
  nav_text_1: 'Menu',
  nav_text_2: 'About',
  nav_text_3: 'Cakes',
)

puts "seeded #{User.all.size} Users"
puts "seeded #{Category.all.size} Category"
puts "seeded #{Product.all.size} Products"
puts "seeded #{LandingPage.all.size} Landing_page"
puts "seeded #{AboutPage.all.size} About"
puts "seeded #{Footer.all.size} Footer"
puts "seeded #{Navbar.all.size} Navbar"

