class HerbsController < ApplicationController
  def index
    herbs = Herb.all
    render json: herbs, status: 201
  end

  def show
    herb = Herb.find_by(id: params[:id])
    render json: herb, status: 201
  end

  def update
    herb = Herb.find_by(id: params[:id])
    herb.likes += 1
    herb.save
    render json: herb, status: 201
  end

  def likes
    favoriteHerbs = Herb.where('likes > 0')
    render json: favoriteHerbs, status: 201
  end

end
