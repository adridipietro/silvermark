# frozen_string_literal: true
Devise.setup do |config|
    config.jwt do |jwt|
        jwt.secret = ENV['JWT_SECRET']
        jwt.dispatch_requests = [
          ['POST', %r{^/login$}]
        ]
        jwt.revocation_requests = [
          ['DELETE', %r{^/logout$}]
        ]
        jwt.expiration_time = 30.minutes.to_i
    end
  # The secret key used by Devise. Devise uses this key to generate
  # random tokens. Changing this key will render invalid all existing
  # confirmation, reset password and unlock tokens in the database.
  # Devise will use the `secret_key_base` as its `secret_key`
  # by default. You can change it below and use your own secret key.
  # config.secret_key = '1feb946b3ae0311b11d5613607cee996a4b14967c5d05dee31efaad05b679bc2755b52659e4aa3b28f4f2172c59401abaad940671fff5ad83023728a80219b49'

  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'


  require 'devise/orm/active_record'


  config.case_insensitive_keys = [:email]


  config.strip_whitespace_keys = [:email]


  config.skip_session_storage = [:http_auth]



  # By default, Devise cleans up the CSRF token on authentication to
  # avoid CSRF token fixation attacks. This means that, when using AJAX
  # requests for sign in and sign up, you need to get a new CSRF token
  # from the server. You can disable this option at your own risk.
  # config.clean_up_csrf_token_on_authentication = true

  # When false, Devise will not attempt to reload routes on eager load.
  # This can reduce the time taken to boot the app but if your application
  # requires the Devise mappings to be loaded during boot time the application
  # won't boot properly.
  # config.reload_routes = true


  config.stretches = Rails.env.test? ? 1 : 12
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = true
  config.password_length = 6..128
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
  config.reset_password_within = 6.hours
  config.navigational_formats = []
  config.sign_out_via = :delete

  
end
