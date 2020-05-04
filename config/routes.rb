Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update:, :destroy] do
        resources :words, only: [:create, :update]
        resources :letters, only: [:create, :update]
        resources :wordletters, only: [:create, :update]

        resources :readymades, only: [:index, :create, :update, :destroy] #this is only for admin 
        resources :spokenmessages, only: [:index, :create, :update, :destroy] #this is only for admin
      end      
    end
  end



end
