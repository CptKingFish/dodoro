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

import { LangContext } from "@/pages/_app";
import { useContext } from "react";
import YouTubePlayer from "@/components/YoutubePlayer";

export default function BlogDodol() {
  const { lang } = useContext(LangContext);
  return (
    <>
      <div className="overflow-hidden bg-white mt-16">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-lg font-semibold text-yellow-500">
                {lang.name !== "Bahasa" ? <>Article</> : <>Artikel</>}
              </h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-yellow-950 sm:text-4xl">
                {lang.name !== "Bahasa" ? (
                  <>The Dodol makers of Tanete village</>
                ) : (
                  <>Para pembuat Dodol di desa Tanete</>
                )}
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
                    <span className="ml-2">
                      {lang.name !== "Bahasa" ? (
                        <>Photograph by Marcus O’Leary</>
                      ) : (
                        <>Foto oleh Marcus O’Leary</>
                      )}
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* <div className="mt-10 pt-10">
                <YouTubePlayer videoId={"fjM0wD3y9Bw"} />
              </div> */}
            </div>
            <div className="mt-8 lg:mt-0">
              <span className="mt-2 text-2xl font-bold tracking-tight text-yellow-900">
                {lang.name !== "Bahasa" ? (
                  <>What is Dodol?</>
                ) : (
                  <>Apa itu Dodol?</>
                )}
              </span>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                {lang.name !== "Bahasa" ? (
                  <>
                    Dodol, also known as Dodoro in Makassar, is a traditional
                    confectionery originating from Indonesia, composed of sugar
                    palm, white and black glutinous rice, palm sugar, and
                    coconut milk. This confection holds significant cultural
                    importance in Indonesia, often gracing the tables of
                    weddings and festivals.
                  </>
                ) : (
                  <>
                    Dodol, juga dikenal sebagai Dodoro di Makassar, adalah
                    makanan tradisional kembang gula yang berasal dari
                    Indonesia, berbahan dasar gula pasir kelapa sawit, beras
                    ketan putih dan hitam, gula aren, dan satan. Penganan ini
                    memiliki arti penting budaya yang signifikan di Indonesia
                    sering menghiasi meja pesta pernikahan dan festival.
                  </>
                )}
              </p>
              <div className="mt-10 max-w-xl leading-7 text-gray-700 lg:max-w-none text-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  {lang.name !== "Bahasa" ? (
                    <>How is Dodol made?</>
                  ) : (
                    <>Bagaimana cara pembuatan Dodol?</>
                  )}
                </h2>
                <p className="mt-6">
                  {lang.name !== "Bahasa" ? (
                    <>
                      The production of dodol involves a labor-intensive, manual
                      process. Dodol makers eschew the use of machinery or
                      specialized equipment, opting instead for hands-on
                      craftsmanship.
                    </>
                  ) : (
                    <>
                      Pembuatan dodol dilakukan secara manual dan waktu yang
                      lama. Pembuat dodol menghindari penggunaan mesin atau
                      peralatan khusus, dan cara yang lama.
                    </>
                  )}
                </p>
                <p className="mt-6">
                  {lang.name !== "Bahasa" ? (
                    <>
                      The cooking procedure itself spans a duration of 2-4
                      hours, employing firewood to facilitate the process. A
                      lengthier cooking time contributes to an extended shelf
                      life for the final product. Typically, a bag of dodol
                      weighs approximately 50 grams and is retailed for 4000 to
                      5000 rupiah.
                    </>
                  ) : (
                    <>
                      Prosedur memasaknya sendiri berlangsung selama 2-4 jam,
                      menggunakan kayu bakar untuk memudahkan prosesnya. Lebih
                      panjang waktu memasak berkontribusi pada perpanjangan umur
                      produk dodol. Biasanya, sekantong dodol memiliki berat
                      kurang lebih 50 gram dan dijual dengan harga 4000 hingga
                      5000 rupiah.
                    </>
                  )}
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  {lang.name !== "Bahasa" ? (
                    <>The cooking process</>
                  ) : (
                    <>Proses memasak</>
                  )}
                </h2>

                <ul role="list" className="mt-8 space-y-8 text-gray-900">
                  <li className="flex gap-x-3">
                    <MoonIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {lang.name !== "Bahasa" ? (
                        <>
                          The initial stages of cooking entail soaking glutinous
                          rice overnight, followed by milling it into a fine
                          powder and sun-drying.
                        </>
                      ) : (
                        <>
                          Tahap awal memasak memerlukan perendaman ketan beras
                          semalaman, dilanjutkan dengan menggilingnya menjadi
                          bubuk halus dan penjemuran di bawah sinar matahari.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HandRaisedIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {lang.name !== "Bahasa" ? (
                        <>
                          The extraction of coconut milk is accomplished
                          manually, by hand.
                        </>
                      ) : (
                        <>
                          Ekstraksi santan dilakukan secara manual, dengan
                          tangan.
                        </>
                      )}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <FireIcon
                      className="mt-1 h-5 w-5 flex-none text-yellow-600"
                      aria-hidden="true"
                    />
                    <span>
                      {lang.name !== "Bahasa" ? (
                        <>
                          Subsequently, all ingredients are combined and set to
                          cook over a firewood-fueled flame. Dodol makers
                          diligently stir the mixture for hours on end to
                          prevent scorching.
                        </>
                      ) : (
                        <>
                          Selanjutnya, semua bahan digabungkan dan dimasak di
                          atas nyala api berbahan bakar kayu bakar. Pembuat
                          dodol rajin mengaduk campuran selama berjam-jam untuk
                          mencegah gosong.
                        </>
                      )}
                    </span>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-900">
                  {lang.name !== "Bahasa" ? (
                    <>The plight of Dodol makers</>
                  ) : (
                    <>Nasib para pembuat Dodol</>
                  )}
                </h2>
                <p className="mt-6">
                  {lang.name !== "Bahasa" ? (
                    <>
                      Making Dodol isn&apos;t easy. Dodol makers suffers from
                      back pain, eye irritation, breathing difficulty and etc
                      from making Dodol. Their stove is positioned close to the
                      ground where they would have to bend down while exerting
                      force to stir the Dodol mixture.
                    </>
                  ) : (
                    <>
                      Membuat Dodol tidaklah mudah. Para pembuat dodol menderita
                      sakit pinggang rasa sakit, iritasi mata, kesulitan
                      bernapas dan lain-lain karena pembuatan dodol. Kompor
                      mereka diposisikan dekat dengan tanah mereka harus
                      membungkuk sambil mengerahkan tenaga untuk mengaduk
                      Campuran dodol.
                    </>
                  )}
                </p>
                <p className="mt-6">
                  {lang.name !== "Bahasa" ? (
                    <>
                      In addition, they would have to stir the concoction for
                      hours on end in that same awkward position which leads to
                      them having back ache. As they stir the concoction, the
                      ashy smoke rising from the wok would hurt their eyes and
                      affect their work performance as well.
                    </>
                  ) : (
                    <>
                      Selain itu, mereka harus mengaduk dodol tersebut selama
                      berjam-jam pada akhirnya dalam posisi canggung yang sama
                      yang mengarah pada mereka mengalami sakit punggung. Saat
                      mereka mengaduk dodol, asapnya menjadi abu dari wajan akan
                      melukai mata mereka dan mempengaruhi mata mereka kinerja
                      kerja juga.
                    </>
                  )}
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
