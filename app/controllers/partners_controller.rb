class PartnersController < ApplicationController

    def index
        partners = Partner.all
        render json: partners, only: [:name, :location_id]
    end
    
    def show
        partner = Partner.find_by(id: params[:id])
            if partner
                render json: partner
            else
                render json: { error: "partner not found" }, status: :not_found
            end
    end

    def create
        partner = Partner.create!(partner_params)
        render json: partner, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def partner_params
        params.permit(:name, :location_id)
    end
end
