class BarangsController < APIController
  before_action :set_barang, only: %i[ show update destroy ]

  # GET /barangs
  # GET /barangs.json
  def index
    # @barangs = Barang.all
    @barangs = Barang.order(kode_barang: :asc)
  end

  # GET /barangs/1
  # GET /barangs/1.json
  def show
  end

  # POST /barangs
  # POST /barangs.json
  def create
    @barang = Barang.new(barang_params)

    if @barang.save
      render :show, status: :created, location: @barang
    else
      render json: @barang.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /barangs/1
  # PATCH/PUT /barangs/1.json
  def update
    if @barang.update(barang_params)
      render :show, status: :ok, location: @barang
    else
      render json: @barang.errors, status: :unprocessable_entity
    end
  end

  # DELETE /barangs/1
  # DELETE /barangs/1.json
  def destroy
    @barang.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barang
      @barang = Barang.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def barang_params
      params.fetch(:barang, {}).permit(:kode_barang, :nama_barang, :harga)
    end
end
