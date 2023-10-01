import {
  CloudArrowUpIcon,
  FireIcon,
  HandRaisedIcon,
  LockClosedIcon,
  MoonIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function AboutContent() {
  return (
    <div className="relative bg-white mt-24">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-yellow-400">
              About
            </p>
            <span className="mt-2 text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl">
              What is Dodol?
            </span>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Dodol, which is also referred to as Dodoro in Makassar, is a sweet
              toffee-like sugar palm based confection. It is made with white and
              black glutinous rice, palm sugar and coconut milk. Dodol has a
              strong cultural significance in Indonesia and is served at
              weddings and festivals.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                How is Dodol made?
              </h2>
              <p className="mt-6">
                Making dodol is a tedious and tiring manual process. There are
                no equipments or machines that are being utilised by the dodol
                makers and they carry out everything manually.
              </p>
              <p className="mt-6">
                The cooking process itself takes 2-4 hours using firewood as the
                longer the time taken to cook, the longer the shelf life of the
                product. One bag of dodol is around 50grams, and is sold for
                4000 rupiah to 5000 rupiah.
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
                    The cooking process kicks off with soaking the glutinous
                    rice overnight, milled into powder and dried under the sun.
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
                    Coconut milk is squeezed from fresh coconuts manually, by
                    hands.
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
                    Then, all the other ingredients are added inside and placed
                    to cook using firewood and the dodol makers have to stir
                    continuously for hours to prevent the dodol from being
                    burnt.
                  </span>
                </li>
              </ul>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
