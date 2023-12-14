import Benefits from "./components/benefits";
import Feedbacks from "./components/feedbacks";
import { Footer } from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Benefits />
      <Feedbacks />
      <Footer />
    </>
  );
}
