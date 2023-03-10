import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { RESOURCE_DOMAIN } from "../Constant";
import {
  removeAllFromBasket,
  selectItems,
  selectTotal,
} from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import { addToOrder, selectOrderItems } from "../slices/orderSlice";
import { useRouter } from "next/router";

const stripePromise = loadStripe();
function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const router = useRouter();

  const session = useState(true);

  const dispatch = useDispatch();

  const id = useSelector(selectOrderItems);

  function renderBasket() {
    return (
      <div className="flex-grow m-5 shadow-sm">
        <Image
          src={RESOURCE_DOMAIN + "/ikj"}
          width={1020}
          height={250}
          style={{ objectFit: "contain" }}
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your Amazon Basket is empty."
              : "Shopping Basket"}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
      </div>
    );
  }

  function renderCheckout() {
    return (
      items.length > 0 && (
        <div className="flex flex-col bg-white p-10 shadow-md">
          <h2 className="whitespace-nowrap">
            Subtotal ({items.length} items):
            <span className="font-bold">
              <Currency quantity={total} currency="GBP" />
            </span>
          </h2>

          <button
            onClick={() => checkoutToOrderHistory()}
            role="link"
            // disabled={!session}
            className={`button mt-2 ${
              !session &&
              "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
        </div>
      )
    );
  }

  const checkoutToOrderHistory = () => {
    let orderId = id.length + 1;
    let amount = total;
    let amountShipping = 0.99;
    let orderItems = items.length;
    let timestamp = Date.now();
    let images = items.map(({ image }) => image);

    const order = {
      orderId,
      amount,
      amountShipping,
      orderItems,
      timestamp,
      images,
    };
    console.log("checkoutToOrderHistory", order);
    dispatch(addToOrder(order));
    dispatch(removeAllFromBasket());
    router.push("/success");
  };

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        {renderBasket()}
        {/* Right */}
        {renderCheckout()}
      </main>
    </div>
  );
}

export default Checkout;
