import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import dogImg from '../../../public/hero-dog.webp';
import catImg from '../../../public/cat-hero.png';
import logoImg from '../../../public/logoimage.png';

export function Hero() {

    return (
        <section className="bg-[#ee6356] text-white relative overflow-hidden mt-15">

            <div>
                <Image
                    src={logoImg}
                    alt='Foto do cachorro'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-30 md:hidden"></div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-items-center">
                    {/* Primeiro bloco (Texto e botão) */}
                    <div className="space-y-6 mb-3">
                        <h1 className="text-3xl md:text-4xl  font-bold leading-10"
                            data-aos="fade-down"
                        >
                            Você merece cuidado, carinho e atenção especial.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e felicidade.
                        </p>

                        <a
                            href={`https://wa.me/351918803517?text=Olá vim pelo site e gostaria de mais informações`}
                            target='_blank'
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <WhatsappLogo className='w-5 h-5' />
                            Contato via WhatsApp
                        </a>

                    </div>

                    {/* Segundo bloco (Imagem circular) */}
                    <div className="hidden lg:block w-60 h-60 relative rounded-full overflow-hidden mb-5">
                        <Image
                            src={logoImg}
                            alt="Foto do dog"
                            className="object-cover "
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>

                </article>
            </div>


        </section>
    )
}