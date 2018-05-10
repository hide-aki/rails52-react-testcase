class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token # Not to be used in production
end
