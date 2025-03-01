"use client"

import Image from 'next/image';
import logoImg from '../../../public/logoimage.png';
import { useScrollToSection } from '../../hooks/useScrollToSection'

export function Header() {

  const scrollToSection = useScrollToSection();

  return (
    <header className="flex px-6 py-4 bg-zinc-800 text-white fixed top-0 opacity-95 left-0 w-full h-15 z-30">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo no canto esquerdo */}
        <div className="hidden md:block w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src={logoImg}
            alt="Logo"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 0vw, 50vw"
            quality={100}
            priority
          />
        </div>
        {/* Lista de navegação no canto direito */}
        <ul className="flex items-center gap-3">
          <li>
            <button onClick={() => scrollToSection("inicio")} className="hover:text-gray-300 transition">
              Início
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("sobre")} className="hover:text-gray-300 transition">
              Sobre
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("cursos")} className="hover:text-gray-300 transition">
              Cursos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("servicos")} className="hover:text-gray-300 transition">
              Serviços
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("depoimentos")} className="hover:text-gray-300 transition">
              Depoimentos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contatos")} className="hover:text-gray-300 transition">
              Contatos
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}