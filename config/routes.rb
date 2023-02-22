Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :neighbors, only: [:create, :index, :show]
  resources :categories, only: [:create, :index, :show]
  resources :partners, only: [:create, :index, :show]
  resources :locations, only: [:create, :index, :show]
  resources :donations, only: [:create, :index, :show]
  resources :donors, only: [:create, :index, :show]
  resources :needs, only: [:create, :index, :show, :destroy]

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
end
