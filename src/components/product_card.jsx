import { LangContext } from "@/pages/_app";
import { useContext } from "react";

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  // More products...
];

export default function ProductCard() {
  const { lang } = useContext(LangContext);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl ">
        <h2 className="text-xl font-bold text-yellow-900 mb-3">
          {" "}
          {lang.name !== "Bahasa" ? <>Benefits</> : <>Manfaat</>}
        </h2>

        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={"/tshirt.png"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {"Zip Tote Basket"}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {"White and black"}
                </p>
              </div> */}
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">
                  {lang.name !== "Bahasa" ? (
                    <>Donate 50,000Rp and receive this T-shirt.</>
                  ) : (
                    <>Donasikan Rp 50.000 dan dapatkan T-shirt ini.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
