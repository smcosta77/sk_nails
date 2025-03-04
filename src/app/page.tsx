import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Service } from "./_components/service";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero id="inicio" />
      <About id="sobre" />
      <Service id="servicos" />
      <Testimonials id="depoimentos" />
      <Footer />
    </main>
  );
}