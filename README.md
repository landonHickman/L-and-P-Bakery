# README

### Steps to clone

1. git clone git@github.com:landonHickman/start_proj.git <new_app_name_here>
2. cd <new_app_name_here>

* Ruby version 2.7.3
**if you are not running 2.7.3 run the steps below**
**rm needs to be done in the root rails file**
- remove the  .ruby-version file `rm -r .ruby-version `
- remove the  Gemfile.lock `rm -r Gemfile.lock `
- in line 4 of Gemfile delete this line `ruby '2.7.2'`

### Rails Steps
1. bundle
2. rename database, in database.yml find and replace `change_db_name_here` to <app_name_here>
3. rails db:create db:migrate db:seed
4. rails s -p 3001
### React setup steps (open a separate terminal pane)
1. cd client
2. yarn
3. yarn start

goto localhost:3000 to see react app
goto localhost:3001 to see rails app
### GitHub Steps
1. remove remote `git remote remove origin`
2. create new repo on github
3. add remote `git remote add <ssh_link_here>`