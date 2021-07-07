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

15.times do
  drinks.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample
   )
end

15.times do
  bakery.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample
   )
end

15.times do
  cakes.products.create(
    name: Faker::Food.dish, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkjoU6UdnGKkv9If0H-RzLGQ3Lv5Ue3Z5-_QS43rDx1JzS42NuiVxOty1vPj4VFHrq-4&usqp=CAU', 
    price: Faker::Number.decimal(l_digits: 2),
    description: Faker::Food.description,
    limited_time: random_boolean.sample,
    special_item_carousel: random_boolean.sample
   )
end
# need to add landingPage special_bakery_item pic title price
LandingPage.create(
  main_title: 'L & P Bakery Cafe', 
  main_background_img: 'https://www.ocregister.com/wp-content/uploads/2020/09/bakery-02-1.jpg', 
  carousel_title: 'Special Bakery Items', 
  grid_title_1: 'Cakes', 
  grid_description_1: Faker::Lorem.paragraph, 
  grid_title_2: 'Boba', 
  grid_description_2: Faker::Lorem.paragraph
)

AboutPage.create(
  title: 'Our Story',
  text: 'Loam Bakery started in 2010 as two friends searching for the perfect balance of flour, water, and salt. Loam Bakery now sells a daily selection of breads and pastries both online and in-store.',
  image: 'https://i.imgur.com/Qyc2UN3.jpeg',
  cta_title: 'A L&P Bakery Cafe, we’re always looking for talented individuals to join our team',
  cta_button_text: 'Apply Now',
)

Footer.create(
  address: '895 E 9400 S', 
  city: 'Sandy',
  state: 'Utah',
  zip: '84094',
  phone_number: '801-679-1018',
  email: 'landpbakerycafe@gmail.com',
  social_media_logo_1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII=',
  social_media_url_1: 'https://www.facebook.com/pg/landpbakerycafe/menu/?ref=page_internal&mt_nav=0&msite_tab_async=0',
  social_media_logo_2: 'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg',
  social_media_url_2: 'https://twitter.com/?lang=en',
  social_media_logo_3: 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg',
  social_media_url_3: 'https://www.instagram.com/landpbakerycafe/?hl=en',
)

Navbar.create(
  nav_logo: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/103777470_109769864105349_4714216089081921319_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=sO6wXqdYtRcAX9WfWsX&_nc_ht=scontent-sjc3-1.xx&oh=546a06edf6ea2f1015d19d757e7379e5&oe=60E2846B',
  nav_text_1: 'Menu',
  nav_text_2: 'About Us',
  nav_text_3: 'Custom Cakes',
)

puts "seeded #{User.all.size} Users"
puts "seeded #{Category.all.size} Category"
puts "seeded #{Product.all.size} Products"
puts "seeded #{LandingPage.all.size} Landing_page"
puts "seeded #{AboutPage.all.size} About"
puts "seeded #{Footer.all.size} Footer"
puts "seeded #{Navbar.all.size} Navbar"

