import Equipment from "./sections/Equipment"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Ordered from "./sections/Ordered"
import Tank300 from "./sections/Tank300"
import Tank500 from "./sections/Tank500"
import Timer from "./sections/Timer"


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Timer />
      <Tank300 />
      <Tank500 />
      <Ordered />
      <Equipment />
      <Footer />
    </div>
  )
}

export default App