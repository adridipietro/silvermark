class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    include Devise::JWT::RevocationStrategies::JTIMatcher

    devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
    
    
    has_many :categories, dependent: :destroy
    has_many :bookmarks, through: :categories

    validates :name, presence: { message: "Name must be given" }
    validates :email, presence: { message: "Email must be given" }, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i


    def jwt_payload
      super.merge('foo' => 'bar')
    end
end
