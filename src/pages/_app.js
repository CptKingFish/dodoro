import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { createContext, useContext, useState } from "react";

export const LangContext = createContext(null);

const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Bahasa" },
];
export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState(languages[0]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Navbar />
      <Component {...pageProps} />
    </LangContext.Provider>
  );
}
