Rails.application.routes.draw do
  scope '/api' do
    resources :herbs
    get '/likes', to: 'herbs#likes'

    resources :medicinal_uses

    resources :properties
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
