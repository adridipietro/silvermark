Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :categories
  resources :users
  resources :bookmarks
  
  #get 'home/index'
  #root 'home#index'

  post '/login', :to => 'auth#create'
  post'/signup', :to => 'users#create'
  delete '/logout', :to => 'users#destroy'

  #get '/current_user', to: 'current_user#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
