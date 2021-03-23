import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Launching Soon | Foruminator</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="flex h-screen md:bg-gray-100 font-sans">
        <div className="m-auto text-center space-y-3 md:bg-white md:p-5 md:rounded-lg md:shadow-lg">
          <div className="w-80 m-auto">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_atjj0tgb.json"
            />
          </div>
          <div className="px-6 space-y-3">
            <h1 className="text-4xl font-semibold">We are launching soon !</h1>
            <p className="text-xl font-light">
              Foruminator is a free and open source tool which allows you to
              easily generate forum pages. We are currently in development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
