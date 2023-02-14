class SessionsController < ApplicationController
    # def index
    #     session[:session_hello] = "Taco"
    #     cookies[:cookies_hello] = "Taco 2"
    #     render json: { session: session, cookies: cookies.to_hash }
    # end

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def destroy
        session.delete :user_id
        head :no_content
      end
end
