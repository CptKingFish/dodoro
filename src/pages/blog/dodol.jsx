import Footer from "@/components/footer";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/20/solid";
import {
  CloudArrowUpIcon,
  FireIcon,
  HandRaisedIcon,
  LockClosedIcon,
  MoonIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function BlogDodol() {
  return (
    <>
      <div className="overflow-hidden bg-white mt-16">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-lg font-semibold text-yellow-500">Article</h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-yellow-950 sm:text-4xl">
                The Dodol makers of Tanete village
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/making.png"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <span className="mt-2 text-2xl font-bold tracking-tight text-yellow-900">
                What is Dodol?
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Dodol, also known as Dodoro in Makassar, is a traditional
                confectionery originating from Indonesia, composed of sugar
                palm, white and black glutinous rice, palm sugar, and coconut
                milk. This confection holds significant cultural importance in
                Indonesia, often gracing the tables of weddings and festivals.
              </p>
              <div className="mt-10 max-w-xl leading-7 text-gray-700 lg:max-w-none text-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  How is Dodol made?
                </h2>
                <p className="mt-6">
                  The production of dodol involves a labor-intensive, manual
                  process. Dodol makers eschew the use of machinery or
                  specialized equipment, opting instead for hands-on
                  craftsmanship.
                </p>
                <p className="mt-6">
                  The cooking procedure itself spans a duration of 2-4 hours,
                  employing firewood to facilitate the process. A lengthier
                  cooking time contributes to an extended shelf life for the
                  final product. Typically, a bag of dodol weighs approximately
                  50 grams and is retailed for 4000 to 5000 rupiah.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  The cooking process
                </h2>

                <ul role="list" className="mt-8 space-y-8 text-gray-900">
                  <li className="flex gap-x-3">
                    <MoonIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {/* <strong className="font-semibold text-gray-900">
                        Push to deploy.
                      </strong>{" "} */}
                      The initial stages of cooking entail soaking glutinous
                      rice overnight, followed by milling it into a fine powder
                      and sun-drying.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HandRaisedIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {/* <strong className="font-semibold text-gray-900">
                        SSL certificates.
                      </strong>{" "} */}
                      The extraction of coconut milk is accomplished manually,
                      by hand.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FireIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {/* <strong className="font-semibold text-gray-900">
                        Database backups.
                      </strong>{" "} */}
                      Subsequently, all ingredients are combined and set to cook
                      over a firewood-fueled flame. Dodol makers diligently stir
                      the mixture for hours on end to prevent scorching.
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  The plight of Dodol makers
                </h2>
                <p className="mt-6">
                  Making Dodol isn&apos;t easy. Dodol makers suffers from back
                  pain, eye irritation, breathing difficulty and etc from making
                  Dodol. Their stove is positioned close to the ground where
                  they would have to bend down while exerting force to stir the
                  Dodol mixture.
                </p>
                <p className="mt-6">
                  In addition, they would have to stir the concoction for hours
                  on end in that same awkward position which leads to them
                  having back ache. As they stir the concoction, the ashy smoke
                  rising from the wok would hurt their eyes and affect their
                  work performance as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
