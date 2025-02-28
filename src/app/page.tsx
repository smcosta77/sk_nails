import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Service } from "./_components/service";
import { Testimonials } from "./_components/testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Testimonials />
      <Footer />
    </main>
  );
}
