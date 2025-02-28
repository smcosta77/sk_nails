"use client"

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import tutor1 from '../../../public/tutor1.png';
import tutor2 from '../../../public/tutor2.png';
import Image from 'next/image';

const testimonials = [
  {
    content:
      "Estou encantada com o trabalho de manicure aqui! A atenção aos detalhes, a qualidade do serviço e a higiene são impecáveis. As unhas ficam perfeitas, e o atendimento é super acolhedor. Sem dúvida, encontrei meu lugar para cuidar das minhas unhas.",
    author: "Mariana Souza",
    role: "💅 Cliente satisfeita com o serviço de Manicure! 💖",
    image: tutor2,
  },
  {
    content:
      "Eu sou muito exigente quando se trata de pedicure, e posso dizer que esse salão superou todas as minhas expectativas. As unhas ficam lindas e bem cuidadas, e o ambiente é sempre agradável. Além disso, o profissionalismo e a atenção que recebo me fazem me sentir especial.",
    author: "Rafael",
    role: "🌸 Cliente feliz com o serviço de Pedicure! 🌸",
    image: tutor1,
  },
  {
    content: "Fiz a formação de manicure e pedicure e, hoje, posso dizer que foi uma das melhores decisões da minha vida! As aulas foram super práticas, com muito conteúdo relevante. Além de aprender técnicas incríveis, ganhei confiança para começar meu próprio negócio. Estou muito grata ao salão pela excelente formação!",
    author: "Camila fernandes",
    role: "🎓 Ex-aluna do curso de Manicure e Pedicure! 💅",
    image: tutor2,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (

    <section className="bg-[#eed78b] py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>
        <div className="relative max-w-4xl mx-auto">

          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200'>{item.content}</p>
                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                      </div>
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