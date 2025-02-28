
import Image from 'next/image';
import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import { InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr';
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr';


const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {

  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className='container mx-auto px-4'>

        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
            {brands.map((item, index) => (
              <div key={index}
                className='bg-white p-4 rounded-lg flex items-center justify-center'
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Pet Shop</h3>
            <p className='mb-4'>Cuidar do seu melhor amigo com amor e dedicação.</p>
            <a
              href={`https://wa.me/351911508619?text=Olá vim pelo site e gostaria de mais informações`}
              target='_blank'
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contactos</h3>
            <p className=''>E-mail: teste@gmail.com</p>
            <p className=''>Telefone: 918 803 517</p>
            <p className=''>Morada: Rua José Joaquim Marques 181B, 2870-459 Montijo</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes Socias</h3>
            <div className='flex gap-4'>
              <a href={`https://m.facebook.com/sknailsmontijo?locale=br_FR&_rdr`} target='_blank'
              >
                <FacebookLogo className='w-8 h-8' />
              </a>
              <a href={`https://www.instagram.com/explore/locations/525453001194164/sk-nails-montijo/`} target='_blank'>
                <InstagramLogo className='w-8 h-8' />
              </a>
              <a href='#' target='_blank'>
                <TiktokLogo className='w-8 h-8' />
              </a>
            </div>
          </div>

        </footer>

      </div>

    </section>
  )
}