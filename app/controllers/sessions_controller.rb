class SessionsController < ApplicationController
    def index
        session[:session_hello] = "Taco"
        cookies[:cookies_hello] = "Taco 2"
        render json: { session: session, cookies: cookies.to_hash }
      end

      def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
      end
end
