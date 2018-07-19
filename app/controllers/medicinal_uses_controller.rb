class MedicinalUsesController < ApplicationController
  def index
    medicinal_uses = MedicinalUse.order(:name)
    render json: medicinal_uses, status: 201
  end

end
