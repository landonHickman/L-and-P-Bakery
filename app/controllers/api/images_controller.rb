class Api::ImagesController < ApplicationController

  def upload_1_image
    file = params[:fileHere]
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, 
          # public_id: file.original_filename,
          use_filename: true, 
          secure: true, 
          resource_type: :auto
        )
        render json: {file:file, cloud_image: cloud_image}
      rescue => err
        render json: { 
          message: 'failed to save to cloudinary', 
          errors: err}, status: 422
      end
    end
  end
end
