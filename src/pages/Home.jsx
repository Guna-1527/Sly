import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Mobile from "../components/Mobile"
import Navbar from "../components/Navbar"
import Payment from "../components/Payment"
import Service from "../components/Service"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Mobile />
      <Payment />
      <Footer />
    </div>
  )
}

export default Home