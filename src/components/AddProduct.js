import { Link } from "react-router-dom";




const AddProduct = () => {
    return ( 
        <div class="card">
          
            <div class="card-header">
                <p class="h4 mb-2 text-center">Add Product</p>
            </div>
            <div class="card-body">
                <form class="text-center border border-light p-5" action="http://localhost:3000/api/v1/product/appP" method="Post">

                
                    <input type="text" name="name" id="name" class="form-control mb-4"placeholder="Product Name"/>
                    <input type="text" name="category" id="category" class="form-control mb-4"placeholder="Product 商品類別"/>
                    <input type="text" name="price" id="price" class="form-control mb-4"placeholder="Product Price"/>
                    <input type="text" name="type" id="type" class="form-control mb-4"placeholder="Product 款式"/>
                    <input type="text" name="number" id="number" class="form-control mb-4"placeholder="Product 數量"/>
                    

                    <textarea class="form-control mb-4" id="introduce" name="introduce"placeholder="Product Description">Product Description</textarea>
                    <div class="custom-file mb-4">
                        <input type="file" name="image" class="custom-file-input"id="image"/>
                        <label class="custom-file-label"for="customFile">Product Image</label>
                    </div>
                    
                    <button class="btn btn-info btn-block" type="submit">add</button>
                </form>
            </div>
        </div>
    );
}
 
export default AddProduct;