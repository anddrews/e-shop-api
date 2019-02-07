# Test API for final training task supports below methods:
```
Product = {
  id: int,
  category: string
  amount: number
  imgPath: string,
  description: string
}
```
```
GET /api/products  - returns Array<Product>
GET /api/products/:id - returns Product item by id Object:Product
GET /api/products/:id/description - returns description for Product item by id {description: string}
POST /api/products - returns new Product Object:Product
DELETE /api/products/:id returns {id: itemId} 
PUT /api/products/:id - returns Object: Product
```
```
in e-shop-training.postman_collection.json 
you are able to find Postman collection for testing API
```

### for start you need:
 - clone the repo 
 - npm install 
 - npm run start
 
# Pay attention exeptions don't precessed, you have to sent right request format
