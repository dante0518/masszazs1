import { Header, Hero, Section, Footer, Massage, Contact, Payment} from './Components/'
import ScrollToTop from "react-scroll-to-top";

function App() {
  return(
    <>
    <Header/>
    <Hero/>
    <Section/>
    <Massage/>
    <Contact/>
    <Payment/>
    <Footer/>
    <ScrollToTop smooth/>
    </>
  )
}

export default App
