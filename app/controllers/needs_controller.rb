class NeedsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create, :destroy]
    before_action :require_permission, only: [:destroy]

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

    def update
        need = Need.find_by(id: params[:id])
        need.update!(remaining_balance: params[:remaining_balance])
        if need.remaining_balance == 0
            need.update(funded: true)
        end
        render json: need, status: :accepted
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy

        need = Need.find_by(id: params[:id])
        need.destroy
        head :no_content

    end

    def edit_need
        need = Need.find_by(id: params[:id])
        need.update!(description: params[:description])
        render json: need, status: :accepted
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end


    private

    def need_params
        params.permit(:description, :amount, :category_id, :neighbor_id, :user_id, :remaining_balance, :funded )
    end

    def require_permission
        if Need.find(params[:id]).user != current_user
        render json: {error: "You don't have permission to do that"}
        end
    end 
    
end
