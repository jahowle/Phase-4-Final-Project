class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
    end
    
    def show
        location = Location.find_by(id: params[:id])
            if location
                render json: location
            else
                render json: { error: "Location not found" }, status: :not_found
            end
    end

    def create
        location = Location.create!(location_params)
        render json: location, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def location_params
        params.permit(:name)
    end
end
