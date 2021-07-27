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

### Drinks ###
drinks.products.create(
    name: 'Tango Mango', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330589/IMG_0665_edmf5f.jpg', 
    price: 4.45,
    description: 'A delicious Tango Mango Drink!',
    limited_time: true,
    special_item_carousel: true,
    category_carousel: false,
    order: 1,
   )
drinks.products.create(
    name: 'Funky Monkey', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330589/IMG_0667_phcyit.jpg', 
    price: 4.45,
    description: 'A refreshing drink for the weekend!',
    limited_time: false,
    special_item_carousel: false,
    category_carousel: true,
    order: 2,
   )
drinks.products.create(
    name: 'Valentines', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330589/IMG_0666_pz0bkx.jpg', 
    price: 4.45,
    description: 'A romantic drink for the holiday!',
    limited_time: false,
    special_item_carousel: true,
    category_carousel: true,
    order: 3,
   )
drinks.products.create(
    name: 'Citrus Vanilla', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330589/IMG_0663_ribpek.jpg', 
    price: 4.45,
    description: 'Citrus Vanilla drink to refresh you!',
    limited_time: true,
    special_item_carousel: false,
    category_carousel: true,
    order: 4,
   )
drinks.products.create(
    name: 'Toucan', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330589/IMG_0664_ycrzwi.jpg', 
    price: 4.45,
    description: 'A Tropical Tasty Drink!',
    limited_time: false,
    special_item_carousel: true,
    category_carousel: false,
    order: 5,
   )
drinks.products.create(
    name: 'Teddy Bear', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330588/IMG_0662_lnsdjt.jpg', 
    price: 4.45,
    description: 'Snuggle up drink up!',
    limited_time: false,
    special_item_carousel: false,
    category_carousel: true,
    order: 6,
   )
   
### Bakery ###

  bakery.products.create(
    name: 'Bread', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330587/IMG_0354_houlql.jpg', 
    price: 3,
    description: 'With your choice of filling',
    limited_time: true,
    special_item_carousel: false,
    category_carousel: false,
    order: 1,     
   )
   bakery.products.create(
    name: 'Pillow Bread', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330588/IMG_0661_ssn0gt.jpg', 
    price: 4,
    description: 'With your choice of filling',
    limited_time: false,
    special_item_carousel: false,
    category_carousel: false,
    order: 2,     
   )
   bakery.products.create(
    name: 'Wife Cakes', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627332077/shutterstock_761158219.0_ini8f7.jpg', 
    price: 4,
    description: 'Sweet cake with sesame and melon flavor',
    limited_time: false,
    special_item_carousel: true,
    category_carousel: true,
    order: 3,     
   )
   bakery.products.create(
    name: 'Red Bean Mooncake', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627332084/maxresdefault_osks8p.jpg', 
    price: 2,
    description: 'Moon cake with red bean paste inside',
    limited_time: false,
    special_item_carousel: false,
    category_carousel: true,
    order: 4,     
   )
   bakery.products.create(
    name: 'Almond Thin Cookie', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330590/IMG_0676_rnnklr.jpg', 
    price: 2,
    description: 'Thin crispy almond cookie',
    limited_time: false,
    special_item_carousel: false,
    category_carousel: true,
    order: 5,     
   )
   bakery.products.create(
    name: 'Little Chicken Cookie', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627332088/0013_qumikw.jpg', 
    price: 3,
    description: 'Delicious garlic sesame biscuit',
    limited_time: true,
    special_item_carousel: false,
    category_carousel: false,
    order: 6,     
   )


### Cakes ###
cakes.products.create(
    name: 'Fruit', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330590/IMG_0675_gy8a3g.jpg', 
    price: 42.95,
    description: 'This moist, dark cake is loaded with yummy-tasting dried fruits, not the icky, bitter candied peel and citron you remember from visiting your grandma at Christmas.',
    limited_time: true,
    special_item_carousel: true,
    category_carousel: false,
    order: 1,
   )
cakes.products.create(
    name: 'Strawberry', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330590/IMG_4382_x8gaob.jpg', 
    price: 56.00,
    description: "This is truly the ultimate strawberry cake, a tried-and-tested recipe that's loved by many!",
    limited_time: false,
    special_item_carousel: true,
    category_carousel: true,
    order: 2,
   )
cakes.products.create(
    name: 'Napoleon', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627332818/napoleon_cake_g9rqpn.jpg', 
    price: 59.00,
    description: "A lot of thin crispy cake layers greased with gentle vanilla cream",
    limited_time: true,
    special_item_carousel: false,
    category_carousel: true,
    order: 3,
   )
cakes.products.create(
    name: 'Peach', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627332973/Peach_Cake_low9m0.jpg', 
    price: 59.00,
    description: "This peachy delight has charmed folks for years.",
    limited_time: false,
    special_item_carousel: false,
    category_carousel: false,
    order: 4,
   )
cakes.products.create(
    name: 'Durian', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627333206/Durian_Cake_ddzkx2.jpg', 
    price: 45.95,
    description: "Durians are a divisive fruit that some love and others loathe. They are notorious for giving off a pungent odor that stops most in their tracks. But don’t let the aroma deter you from attempting this durian cake.",
    limited_time: false,
    special_item_carousel: false,
    category_carousel: true,
    order: 5,
   )
cakes.products.create(
    name: 'Coffee', 
    image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627333374/Coffee_Cake_ynvb1z.png', 
    price: 40.95,
    description: "This delicious, melt-in-your-mouth coffee cake has a ribbon of cinnamon filling and a crisp streusel topping. Soft with a moist crumb and a bit of crunch on top; it's a perfect breakfast treat.",
    limited_time: false,
    special_item_carousel: true,
    category_carousel: false,
    order: 6,
   )

LandingPage.create(
  main_title: 'L & P Bakery', 
  main_background_img: 'https://res.cloudinary.com/landonhickman/image/upload/v1627409065/DF5FF1D9-FA26-470B-A055-66DC6F17BA37_1_105_c_qrwdof.jpg', 
  carousel_title: 'Special Bakery Items', 
  grid_title_1: 'Cakes', 
  grid_description_1: 'Now we are doing photo print on cake of any pictures of your choice. Also come and try out our Japanese cheese cake with fruit and more.', 
  grid_title_2: 'Drinks', 
  grid_description_2: 'Come try our freshly brewed Boba tea or some of our signature drinks!',
  grid_title_3: 'Bakery',
  grid_description_3: 'We have fresh baked breads and pastries everyday!',
)

AboutPage.create(
  title: 'Our Story',
  text: 'Loam Bakery started in 2010 as two friends searching for the perfect balance of flour, water, and salt. Loam Bakery now sells a daily selection of breads and pastries both online and in-store.',
  image: 'https://res.cloudinary.com/landonhickman/image/upload/v1627330590/IMG_4340_thesht.jpg',
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

