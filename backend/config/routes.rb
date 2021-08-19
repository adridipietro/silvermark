Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
    login: 'login',
    logout: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :categories
  resources :bookmarks
  
  #post '/signup', :to => 'users/registrations#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
