import { useState } from 'react';
import Logo from '../assets/home-logo.svg';
import { FilterButton } from './FilterButton';
import { SearchFilter } from './SearchFilter';

export function Home() {
  const [isSelected, setIsSelected] = useState<boolean>(true)

  const handleIsSelected = (isArrivingAtUFRJ : boolean) => {
    if (isArrivingAtUFRJ) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }

  return (
    <main className='min-h-screen flex flex-col'>
      <div className='bg-blue py-16 flex items-center justify-center'>
        <div className='w-[53%] flex flex-col items-center gap-6'>
          <img 
            src={Logo} 
            alt="Logo do Caronaê - UFRJ" 
            className='h-32'
          />  

          <span className='text-xl leading-[30px] text-[#FEFEFE] text-center'>
            Filtre por data, chegando ou saindo ou, se preferir,<br/>busque por uma carona ou motorista específico.
          </span>
        </div>
      </div> 

      <div className='flex-grow px-20 py-24'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <FilterButton text='Segunda-feira, 22/07' isSelected={true} />
            <div className='h-11 w-[1px] bg-[#E4E7EC] '/>
            <div onClick={() => handleIsSelected(true)}>
              <FilterButton text='Chegando na UFRJ' isSelected={isSelected} />
            </div>
            <div onClick={() => handleIsSelected(false)}>
              <FilterButton text='Saindo da UFRJ' isSelected={!isSelected} />
            </div>
          </div>

          <SearchFilter />
        </div>

      </div>
    </main>
  )
}