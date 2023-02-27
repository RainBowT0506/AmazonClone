import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { Currency } from "react-currency-formatter";
import { RESOURCE_DOMAIN } from "../Constant";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
        style={{ objectFit: "contain" }}
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src={RESOURCE_DOMAIN + "/fdw"}
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
