class DetailTransaksisController < APIController
    before_action :set_detail_transaksi, only: %i[ show update destroy ]

  # GET /detail_transaksis
  # GET /detail_transaksis.json
  def index
    if params[:kf]
      @detail_transaksis = DetailTransaksi.where(kode_faktur: params[:kf])
      result = @detail_transaksis.map do |detail|
        barang = Barang.find_by(kode_barang: detail.kode_barang)
        {
          id: detail.id,
          nama_barang: barang.nama_barang || detail.kode_barang,
          qty: detail.qty,
          total_harga: detail.total_harga
        }
      end

      render json: result
    else
      @detail_transaksis = DetailTransaksi.all
    end
  end

  # GET /detail_transaksis/1
  # GET /detail_transaksis/1.json
  def show
  end

  # POST /detail_transaksis
  # POST /detail_transaksis.json
  def create
    @detail_transaksi = DetailTransaksi.new(detail_transaksi_params)

    if @detail_transaksi.save
      render :show, status: :created, location: @detail_transaksi
    else
      render json: @detail_transaksi.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /detail_transaksis/1
  # PATCH/PUT /detail_transaksis/1.json
  def update
    if @detail_transaksi.update(detail_transaksi_params)
      render :show, status: :ok, location: @detail_transaksi
    else
      render json: @detail_transaksi.errors, status: :unprocessable_entity
    end
  end

  # DELETE /detail_transaksis/1
  # DELETE /detail_transaksis/1.json
  def destroy
    @detail_transaksi.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_detail_transaksi
      @detail_transaksi = DetailTransaksi.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def detail_transaksi_params
      params.fetch(:detail_transaksi, {}).permit(:kode_faktur, :kode_barang, :qty, :total_harga)
    end
end
