Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index] do
        resources :words, only: [:create, :update, :index] # index will have logic to populate only bottom (lowest ranking) two words
        resources :letters, only: [:update, :index] # index will have logic to populate only bottom (lowest ranking) two letters
      
        resources :readymades, only: [:index, :create, :update, :destroy] #this is only for admin 
        resources :spokenmessages, only: [:index, :create, :update, :destroy] #this is only for admin
      end      
    end
  end

  delete "/api/v1/users" => 'api/v1/users#destroy' #custom delete route... will probably need to be replaced with sessions.
  get "/api/v1/users/active_session" => 'api/v1/users#the_session'
  #post "/api/v1/users/#{:id}/words" => 'api/v1/words#create'

end
