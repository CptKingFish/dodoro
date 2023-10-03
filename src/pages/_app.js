import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { createContext, useContext, useEffect, useState } from "react";

export const LangContext = createContext(null);

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Bahasa" },
];

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState(languages[0]);

  // on first render, check if there's a saved language in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localLang = localStorage.getItem("lang");
      // if there is, set the language to the saved language and check language
      const savedLang = languages.find(
        (language) => language.name === localLang
      );
      console.log(savedLang);
      if (localLang) {
        setLang(savedLang);
      }
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}
