import Api from "@/api/Api"
export default {
  getProductLimitByDb(typeProduct) {
    return Api().post("/product/product-limit", typeProduct)
  },
  getProductByFpt(typeProduct) {
    let category = typeProduct.category
    return Api().get(`/product/${category}s-fpt`)
  },
  getProductByDb(typeProduct){
    let category = typeProduct.category
    return Api().post(`/product/products-db`, typeProduct)
  },
  getProductDetail(keyWord) {
    return Api().post("/product/update-product", keyWord)
  }
}
