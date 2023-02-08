Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :neighbors, only: [:create, :index, :show]
  resources :categories, only: [:create, :show]
  resources :partners, only: [:create, :show]
  resources :locations, only: [:create, :show]
  resources :donations, only: [:create, :show]
  resources :donors, only: [:create, :show]
  resources :needs, only: [:create, :show]
end
