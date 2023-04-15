import { Inter } from "next/font/google";
import HeroSection from "../../components/HeroSection";
import { Suspense } from "react";
import Link from "next/link";
import Comments from "../../components/comments";
import Status from "../../components/Status";
import Skillbar from "../../components/Skillbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({services}) {
  return (
    <main>
      <Head> 
        <title> SEO Expert </title>
      </Head>
      <HeroSection />
      <Skillbar/>
      {/* service section */}
      <section className="">
      <Suspense fallback={<div> Loading...... </div>}>
        {services.map((service) => (
          <div key={service.id} className="card bg-base-100 shadow-xl my-10 mx-10">
            <div className="card-body">
              <h2 className="card-title"> {service.title} </h2>
              <p> {service.body} </p>
              <div className="card-actions justify-end">
                <Link href={`/services/${service.id}`} > 
                <button className="btn btn-primary">read more...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Suspense>
      <Status/>
      <Comments/>
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=3"
  );
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};
