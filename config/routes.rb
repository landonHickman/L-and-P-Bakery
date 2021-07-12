Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    post '/images/upload', to: 'images#upload_1_image'
    resources :application_pages
    get '/tests', to: 'tests#index'
    resources :about_pages
    resources :categories 
    resources :products
    resources :landing_pages
    resources :footers
    resources :application_pages
    resources :navbars
  end
end
