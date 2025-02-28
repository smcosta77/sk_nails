
import Image from 'next/image';
import { InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr';
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr';



export function Footer() {

  return (
    <section className="bg-[#ee6356] py-16 text-white">
      <div className='container mx-auto px-4'>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>SK Nails Montijo</h3>
            <p className='mb-4'>Cuidar do sua beleza com amor e dedicação.</p>
            <a
              href={`https://wa.me/351918803517?text=Olá vim pelo site e gostaria de mais informações`}
              target='_blank'
              className='bg-green-500 px-4 py-2 rounded-md'
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contactos</h3>
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
              <a href={`https://www.instagram.com/sk_nails_montijo/`} target='_blank'>
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