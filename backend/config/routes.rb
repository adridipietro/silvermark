Rails.application.routes.draw do

  resources :categories
  resources :users
  get 'home/index'
  resources :bookmarks
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
