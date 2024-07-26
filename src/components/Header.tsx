import { NavLink } from 'react-router-dom';
import Logo from '../assets/header-logo.svg';
import { PrimaryButton } from './PrimaryButton';

export function Header() {
  return (
    <header className='bg-[#FEFEFE] shadow-md py-5 px-10 flex items-center justify-between fixed top-0 left-0 right-0'>
      <NavLink to='/' title='Home'>
        <img
          src={Logo}
          alt="Logo do Caronaê"
          className='h-11.25'
        />
      </NavLink>

      <ul className='flex items-center gap-8 text-sm text-[#464646] font-semibold'>
        <li>
          <NavLink to='/' title='Home' className='hover:text-blue transition-all'>Caronas</NavLink>
        </li>
        <li>
          <NavLink to='/' title='Home' className='hover:text-blue transition-all'>Histórico de Caronas</NavLink>
        </li>
        <li>
          <NavLink to='/' title='Home' className='hover:text-blue transition-all'>Configurações</NavLink>
        </li>
      </ul>

      <PrimaryButton text='Baixe o App' />
    </header>
  )
}