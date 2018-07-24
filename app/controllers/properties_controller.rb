class PropertiesController < ApplicationController
  def index
    properties = Property.order(:name)
    render json: properties, status: 201
  end

  def show
    property = Property.find_by(id: params[:id])
    render json: property.herbs, status: 201
  end

end
