class NeighborsController < ApplicationController
    def index
        neighbors = Neighbor.all
        render json: neighbors
    end
    
    def show
        neighbor = Neighbor.find_by(id: params[:id])
            if neighbor
                render json: neighbor
            else
                render json: { error: "Neighbor not found" }, status: :not_found
            end
    end

    def create
        neighbor = Neighbor.create!(neighbor_params)
        render json: neighbor, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def neighbor_params
        params.permit(:name, :bio, :partner_id)
    end
end
