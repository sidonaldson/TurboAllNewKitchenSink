import Head from "next/head";
import { useState } from "react";
import { Button, GradientText, TestJS } from "ui";
import { Switch } from "@showhereco/slide-ui";

export default function Home() {
  const [activeSide, setActiveSide] = useState("left");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Dashboard <br className="hidden lg:block" />
          <GradientText
            text="Turborepo Example"
            classNames="from-brandred to-brandblue"
          />
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
        <TestJS className="m-4 text-center text-white" />
        <div className="bg-white p-2">
          <Switch
            activeSide={activeSide}
            actionLeft={() => setActiveSide("left")}
            actionRight={() => setActiveSide("right")}
            textLeft="Left sides"
            textRight="Right side"
          />
        </div>
      </main>
    </div>
  );
}
