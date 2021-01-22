Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  resources :posts
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
