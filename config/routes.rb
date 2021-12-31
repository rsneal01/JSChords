Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :artists, only: [:index, :create]
      post '/', to: 'artists#create'
end
  # resources :songs
  # get '/signin', to: 'sessions#new', as: 'signin'
  # post '/session', to: 'sessions#create', as: 'session'
  # delete '/session/', to: 'sessions#destroy'

