import Image from 'next/image';
import fotoImg from '../../../public/imageperfil.png';
import perfilImg from '../../../public/perfilimage1.png';
import { Check, MapPin } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';

interface AboutProps {
  id?: string;
}

export function About({ id }: AboutProps) {

  return (
    <section id={id} className="bg-[#FDF6ec] py-6">
      <div className="container px-4 mx-auto ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="200" >
            <div className="relative w-full h-[400px] rounded-b-3xl overflow-hidden">
              <Image
                src={perfilImg}
                alt='Foto perfil'
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={fotoImg}
                alt='Foto perfil'
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="200">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Olá! Eu sou a Lana, fundadora e formadora da SK Nails, a melhor academia de manicure
              para iniciantes! 💅✨
              💖 Ensino Exclusivo: Ofereço mais do que apenas teoria e prática. Compartilho minha
              experiência para te ajudar a evoluir de manicure a dono(a) de salão! 🚀💼
            </p>
            <ul className="space-y-4">
              <li className='flex items-center gap-2'>
                <Check className='text-red-500' />
                Aberto desde 2021
              </li>
              <li className='flex items-center gap-2'>
                <Check className='text-red-500' />
                Equipa com mais de 6 especialistas.
              </li>
              <li className='flex items-center gap-2'>
                <Check className='text-red-500' />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className='flex gap-2'>
              <a href={`https://wa.me/351918803517?text=Olá vim pelo site e gostaria de mais informações`}
                target='_blank'
                className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
              >
                <WhatsappLogo className='w-5 h-5 text-white' />
                Contato via WhatsApp
              </a>
              <a href={`https://www.google.pt/maps/place/SK+Nails/@38.7037002,-8.970513,17z/data=!4m14!1m7!3m6!1s0xd1939f68df592a1:0xf967de5c2fbb4e5e!2sSK+Nails!8m2!3d38.703696!4d-8.9679381!16s%2Fg%2F11vygtbmxq!3m5!1s0xd1939f68df592a1:0xf967de5c2fbb4e5e!8m2!3d38.703696!4d-8.9679381!16s%2Fg%2F11vygtbmxq?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D`}
                target='_blank'
                className='flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
              >
                <MapPin className='w-5 h-5 text-black' />
                Endereço da loja
              </a>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}