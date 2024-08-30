import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
      <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col pb-3 mx-auto w-full bg-white rounded shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:mt-6">
          <img
            src={product.imageUrl} // Предполагается, что это поле существует в вашем объекте product
            alt={product.name} // Изменено на product.name
            className="flex shrink-0 h-60 bg-zinc-300"
          />
          <div className="flex gap-5 justify-between items-start mx-4 mt-4 max-md:mx-2.5">
            <div className="flex flex-col items-start font-bold">
              <h3 className="self-stretch font-raleway text-xl rotate-[2.4492937051703357e-16rad] text-zinc-900">
                {product.name} {/* Изменено на product.name */}
              </h3>
              <div className="text-base font-raleway leading-loose text-right text-violet-600 rotate-[2.4492937051703357e-16rad]">
                {product.price} {/* Изменено на product.price */}
              </div>
              <div className="mt-2">
                {/* Звезды можно оставить, если они нужны, или убрать */}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <button onClick={() => onAddToCart(product)} className="mt-2 bg-blue-500 text-white p-2 rounded">
                Добавить в корзину
              </button>
            </div>
            <div className="flex flex-col text-xs leading-loose text-zinc-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/feed68b64c8be5b7c697f3aafae3fd9d058b27eab5d5e7cad167b31b6070eb20?placeholderIfAbsent=true&apiKey=a9c7467058db4c12abf735939a63f358"
                alt=""
                className="object-contain self-end w-6 aspect-square"
              />
              <div className="mt-10 font-raleway rotate-[2.4492937051703357e-16rad] max-md:mr-1">
                {/* Можно добавить другие поля, если они нужны */}
                {product.shelfLife} {/* Изменено на product.shelfLife */}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

export default ProductCard