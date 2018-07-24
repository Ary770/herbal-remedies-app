class MedicinalUsesController < ApplicationController
  def index
    medicinal_uses = MedicinalUse.order(:name)
    render json: medicinal_uses, status: 201
  end

  def show
    medicinal_use = MedicinalUse.find_by(id: params[:id])
    render json: medicinal_use.herbs, status: 201
  end

end
