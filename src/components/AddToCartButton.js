import { useCartDispatch } from "./CartContext";

export default function AddToCart({ src,name,price,size,quantity }) {
  const dispatch = useCartDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            src: src,
            name: name,
            price: price,
            size: size,
            quantity: quantity,
          });
        }}
      >
        Add to Cart
      </button>
    </>
  );
}

let nextId = 0;
