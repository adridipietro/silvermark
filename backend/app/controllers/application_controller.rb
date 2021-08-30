class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include ActionController::Cookies
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :password_confirmation, :remember_me])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email])
  end

  def authenticate_user!
    super
  end

  #def current_user
  #  @current_user ||= super || User.find(@current_user.id)
  #end

  #def signed_in?
  #  @current_user.id.present?
  #end
    
    

end
