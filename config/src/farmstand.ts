interface Product {
  price: number;
  name: string;
  quatity: number;
}

const printProduct = (product: Product): void => {
  console.log(product.name + " - $ " + product.price);
};
