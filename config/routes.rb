Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index, :destroy] do
        resources :words, only: [:create, :update, :index] # index will have logic to populate only bottom (lowest ranking) two words
        resources :letters, only: [:update, :index] # index will have logic to populate only bottom (lowest ranking) two letters
        
        resources :sessions, only: [:create, :destroy] #this is only for admin
        resources :readymades, only: [:index, :create, :update, :destroy] #this is only for admin 
        resources :spokenmessages, only: [:index, :create, :update, :destroy] #this is only for admin
      end      
    end
  end

end
