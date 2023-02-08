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
end
