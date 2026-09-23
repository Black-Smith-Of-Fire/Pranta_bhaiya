import { useState } from "react";

import product1 from "../assets/pranta_img.jpeg";
import product2 from "../assets/pranta_img.jpeg";
import product3 from "../assets/pranta_img.jpeg";
import product4 from "../assets/pranta_img.jpeg";
import product5 from "../assets/pranta_img.jpeg";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "a",
    price: 799,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 124,
    image: product1,
    badge: "20% OFF",
  },
  {
    id: 2,
    name: "b",
    price: 999,
    oldPrice: 1499,
    rating: 4.7,
    reviews: 89,
    image: product2,
    badge: "BESTSELLER",
  },
  {
    id: 3,
    name: "k",
    price: 1299,
    oldPrice: 1799,
    rating: 4.9,
    reviews: 210,
    image: product3,
    badge: "POPULAR",
  },
  {
    id: 4,
    name: "c",
    price: 1099,
    oldPrice: 1599,
    rating: 4.6,
    reviews: 67,
    image: product4,
  },
  {
    id: 5,
    name: "d",
    price: 1799,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 156,
    image: product5,
    badge: "SALE",
  },
  {
    id: 6,
    name: "e",
    price: 179,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 156,
    image: product5,
    badge: "SALE",
  },
  {
    id: 7,
    name: "f",
    price: 179,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 156,
    image: product5,
    badge: "SALE",
  },
];

function Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleProducts = 4;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= products.length - visibleProducts + 1
        ? 0
        : prev + 1
    );
  };

  const previousSlide = () => {
    setStartIndex((prev) =>
      prev === 0
        ? products.length - visibleProducts
        : prev - 1
    );
  };

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Featured Collection
            </p>

            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Trending Products
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Discover our most popular products
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="lg:overflow-hidden lg:w-full overflow-hidden w-210">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                startIndex * (100 / visibleProducts + 1.25)
              }%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group min-w-[calc(25%-10px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-white">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur transition hover:bg-white hover:text-red-500"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-4">

                  {/* Rating */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                      {product.rating}
                      <span>★</span>
                    </span>

                    <span className="text-xs text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="truncate text-base font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    className="mt-4 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setStartIndex(index)}
              aria-label={`Show product ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === startIndex
                  ? "w-6 bg-cyan-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
