class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: categories
    end
    
    def show
        category = Category.find_by(id: params[:id])
            if category
                render json: category
            else
                render json: { error: "Category not found" }, status: :not_found
            end
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def category_params
        params.permit(:name)
    end
end
