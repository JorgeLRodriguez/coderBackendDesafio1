class ProductManager 
{
    constructor() 
    {
        this.products = [];
        this.currentId = 0;
    }
    addProduct(product) 
    {
        if (this.products.some((item) => item.code === product.code)) 
        {
            console.log("Product already exists");
            return;
        }
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) 
        {
            console.log("Product is missing required properties");
            return;
        }
        product = { id: this.currentId++, ...product };
        this.products.push(product);
    }
    getProductById(id) 
    {
        if (!this.products.some((item) => item.id === id)) 
        {
            return "Not found";
        }
        return this.products.find((product) => product.id === id);
    }
    getProducts()
    {
        return this.products.length > 0 ? this.products : "No products";
    }
}