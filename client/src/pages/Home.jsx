import Banner from "../components/Banner"
import Featurecar from "../components/Featurebike"
import Hero from "../components/Hero"
import { AnimatedTestimonialsDemo } from "../components/Testimonial"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featurecar/>
      <Banner/>
      <AnimatedTestimonialsDemo/>
    </div>
  )
}

export default Home
