class NeedsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create]

    def index
        needs = Need.all
        render json: needs, include: [:neighbor, :category, :user]
    end
    
    def show
        need = Need.find_by(id: params[:id])
            if need
                render json: need
            else
                render json: { error: "Need not found" }, status: :not_found
            end
    end

    def create
        need = Need.create!(need_params)
        render json: need, include: [:neighbor, :category], status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy

        need = Need.find_by(id: params[:id])
        need.destroy
        head :no_content

    end


    private

    def need_params
        params.permit(:description, :amount, :category_id, :neighbor_id, :user_id, :remaining_balance, :funded )
    end
end
