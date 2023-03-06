class DonationsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create]

    def index
        donations = Donation.all
        render json: donations
    end

    def show
        donation = Donation.find_by(id: params[:id])
            if donation
                render json: donation
            else
                render json: { error: "Donation not found" }, status: :not_found
            end
    end

    def create
        donation = Donation.create!(donation_params)
        donation.update_need_balance
        render json: [donation], status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private

    def donation_params
        params.permit(:amount, :user_id, :need_id)
    end
end
