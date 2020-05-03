Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only [:create, :destroy] do
        resources :words, only [:index, :create, :update]
        resources :letters, only [:index, :create, :update]
        resources :wordletters, only [:index, :create, :update]
      end
      resources :readymades, only [:index]
      resources :spokenmessages, only [:index]
    end
  end


end
