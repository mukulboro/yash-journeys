import Header from "../components/Header"
import Head from "next/head"
import Services from "../components/Services"
import Tours from "../components/Tours"
import Reviews from "../components/Reviews"
import About from "../components/About"


export default function Home() {
  return <>
  <Head>
    <title>
      Yash Journeys
    </title>
  </Head>
  <a id="top" ></a>

  <Header/>

  <a id="services" ></a>
  <Services/>
  <a id="packages" ></a>
  <Tours/>
  <a id="reviews" ></a>
  <Reviews/>
  <a id="team" ></a>
  <About/>

  </>
}
