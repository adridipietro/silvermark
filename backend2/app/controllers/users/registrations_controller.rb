

class Users::RegistrationsController < Devise::RegistrationsController
  include Devise::Controllers::Helpers 
  respond_to :json
  def configure_permitted_parameters
    
    devise_parameter_sanitizer.for(:user).push(:name, :email, :password)
  end


  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up sucessfully.'},
        data: resource
      }
    else
      render json: {
        status: {message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
  
end
