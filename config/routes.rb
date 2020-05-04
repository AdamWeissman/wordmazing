Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :destroy] do
        resources :words, only: [:create, :update]
        resources :letters, only: [:update] #no create, because letters are created same time as the words
        #resources :wordletters, only: [:create, :update] <-there will be no front end json that alters this... this is all backend stuff

        resources :readymades, only: [:index, :create, :update, :destroy] #this is only for admin 
        resources :spokenmessages, only: [:index, :create, :update, :destroy] #this is only for admin
      
      end      
    end
  end

end
