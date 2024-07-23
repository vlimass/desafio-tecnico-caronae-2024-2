import Logo from '../assets/header-logo.svg';

export function Header() {
  return (
    <header className='shadow-md py-5 px-10 flex items-center justify-between'>
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

      <button 
        className='bg-blue text-white text-sm font-semibold px-4 py-2.5 rounded-lg border border-blue hover:text-blue hover:bg-white transition-all'
      >
        Baixe o App
      </button>
    </header>
  )
}