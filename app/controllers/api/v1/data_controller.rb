module Api
    module V1
        class DataController < ApplicationController
            def index
                data = Data.all

                render json: DataSerializer.new(data).serialized_json 
            end
        end
    end
end