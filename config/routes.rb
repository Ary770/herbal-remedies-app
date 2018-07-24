Rails.application.routes.draw do
  scope '/api' do

    resources :herbs
    get '/likes', to: 'herbs#likes'

    resources :medicinal_uses

    resources :properties
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
