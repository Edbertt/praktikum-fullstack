class TransaksisController < APIController
  before_action :set_transaksi, only: %i[ show update destroy ]

  # GET /transaksis
  # GET /transaksis.json
  def index
    @transaksis = Transaksi.all
  end

  # GET /transaksis/1
  # GET /transaksis/1.json
  def show
  end

  # POST /transaksis
  # POST /transaksis.json
  def create
    @transaksi = Transaksi.new(transaksi_params)

    if @transaksi.save
      render :show, status: :created, location: @transaksi
    else
      render json: @transaksi.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /transaksis/1
  # PATCH/PUT /transaksis/1.json
  def update
    if @transaksi.update(transaksi_params)
      render :show, status: :ok, location: @transaksi
    else
      render json: @transaksi.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transaksis/1
  # DELETE /transaksis/1.json
  def destroy
    @transaksi.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaksi
      @transaksi = Transaksi.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def transaksi_params
      params.fetch(:transaksi, {}).permit(:kode_faktur, :tanggal)
    end
end
