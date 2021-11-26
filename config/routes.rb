Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#home'
  # resources :users
  resources :artists
  resources :songs
  # get '/signin', to: 'sessions#new', as: 'signin'
  # post '/session', to: 'sessions#create', as: 'session'
  # delete '/session/', to: 'sessions#destroy'
end
