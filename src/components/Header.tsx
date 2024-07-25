import Logo from '../assets/header-logo.svg';
import { PrimaryButton } from './PrimaryButton';

export function Header() {
  return (
    <header className='bg-[#FEFEFE] shadow-md py-5 px-10 flex items-center justify-between fixed top-0 left-0 right-0'>
      <a href="#">
        <img
          src={Logo}
          alt="Logo do Caronaê"
          className='h-11.25'
        />
      </a>

      <ul className='flex items-center gap-8 text-sm text-[#464646] font-semibold'>
        <li>
          <a href="#" className='hover:text-blue transition-all'>Caronas</a>
        </li>
        <li>
          <a href="#" className='hover:text-blue transition-all'>Histórico de Caronas</a>
        </li>
        <li>
          <a href="#" className='hover:text-blue transition-all'>Configurações</a>
        </li>
      </ul>

      <PrimaryButton text='Baixe o App' />
    </header>
  )
}