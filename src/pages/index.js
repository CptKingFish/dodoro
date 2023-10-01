import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero";
import Actions from "@/components/actions";
import Stats from "@/components/stats";
import Footer from "@/components/footer";
import Content from "@/components/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Actions />
      </section>

      <Footer />
    </>
  );
}
