"use client"

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, SquarePen, ChevronRight, Scissors, Footprints, Syringe, CarTaxiFront, Hotel, Clock, HandCoins } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

const services = [
  {
    title: "Manicure",
    description: "✨Suas unhas merecem todo o carinho! 💅 Agende seu horário e venha conferir os nossos serviços de manicure com muito amor e dedicação. 💖 #ManicureComAmor #ClienteFeliz #UnhasPerfeitas",
    duration: "1h",
    price: "$50",
    icon: <HandCoins />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    title: "Pedicure",
    description: "🌸 Seus pés merecem cuidado e atenção especial! Agende já seu horário para uma pedicure de qualidade e venha relaxar enquanto cuido de cada detalhe. 💅✨ #PésCuidados #PedicureDeQualidade #CuidandoDeVocê",
    duration: "1h",
    price: "$45",
    icon: <Footprints />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    title: "Formação",
    description: "Quer aprender a arte da manicure e pedicure e transformar sua paixão em profissão? A minha Formação Profissional de Manicure e Pedicure está com inscrições abertas! 👏Aprenda técnicas incríveis, cuidados essenciais com as unhas, higienização e muito mais! 💖",
    duration: "48h",
    price: "$80",
    icon: <SquarePen />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    title: "Outro Serviço",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
]

export function Service() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px": { slidesToScroll: 3 }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (

    <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        <div className="relative">

          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex-1 flex items-start justify-between'>

                      <div className='flex gap-3'>
                        <span className='text-3xl'>{item.icon}</span>
                        <div>
                          <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                          <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                        </div>
                      </div>

                    </div>

                    <div className='border-t border-gray-600 pt-4 flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-sm'>
                        <Clock className='w-4 h-4' />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        href={`https://wa.me/351918803517?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                        target='_blank'
                        className="flex items-center justify-center gap-2 hover:bg-red-400 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className='w-5 h-5' />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'

            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600 ' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'

            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600 ' />
          </button>

        </div>

      </div>

    </section>
  )
}