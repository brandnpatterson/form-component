class Api::V1::SubmissionsController < ApplicationController
  def index
    @submissions = Submission.all
    render json: @submissions, status: :ok
  end

  def show
    @submission = Submission.find(params[:id])
    render json: @submission, status: :ok
  end

  def create
    @submission = Submission.new(submission_params)

    if @submission.save
      render json: @submission, status: :ok
    end
  end

  private

  def submission_params
    params.permit(:name, :email, :phone, :address, :cat, :dog)
  end
end
