import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amigo’s Foreign Languages Academy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn languages. Connect cultures. Master Spanish, French, German, Japanese, and Russian with expert tutors at Amigo’s Foreign Languages Academy." />
      </Head>
      <div className="min-h-screen font-sans" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
