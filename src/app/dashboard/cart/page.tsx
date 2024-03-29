import { products, Product } from "@/app/products/data/products";
import { ItemCart } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
  title: "Shopping Cart",
  description: "SEO Title",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCar: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id);

    if (product) {
      productsInCar.push({ product: product, quantity: cart[id] });
    }
  }
  return productsInCar;
};
export default function CartPage() {
  const cookiesStore = cookies();

  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);

  return (
    <div>
      <h1 className="text-5xl">Cart Products</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCart key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
      </div>
    </div>
  );
}
