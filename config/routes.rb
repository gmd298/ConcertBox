Rails.application.routes.draw do
  resources :events
  resources :musicians, only: [:index, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#edit"
  delete "/users/:id", to: "users#destroy"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
