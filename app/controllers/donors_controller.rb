class DonorsController < ApplicationController
    def index
        donors = Donor.all
        render json: donors
    end
    
    def show
        donor = Donor.find_by(id: params[:id])
            if donor
                render json: donor
            else
                render json: { error: "Donor not found" }, status: :not_found
            end
    end

    def create
        donor = Donor.create!(donor_params)
        render json: donor, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def donor_params
        params.permit(:name)
    end
end
