Devise.setup do |config|
    require 'devise/orm/active_record'
    config.jwt do |jwt|
        jwt.secret = ENV['DEVISE_JWT_SECRET_KEY']
        jwt.dispatch_requests = [
            ['POST', %r{^/login$}]
        ]
        jwt.revocation_requests = [
            ['DELETE', %r{^/logout$}]
        ]
        jwt.expiration_time = 30.minutes.to_i
    end

    config.case_insensitive_keys = [:email]
    config.strip_whitespace_keys = [:email]
    config.skip_session_storage = [:http_auth]

    config.stretches = Rails.env.test? ? 1 : 12

    config.reconfirmable = true
    config.expire_all_remember_me_on_sign_out = true

    config.password_length = 6..128
    config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
    config.reset_password_within = 6.hours

    config.navigational_formats = []
    config.sign_out_via = :delete
end