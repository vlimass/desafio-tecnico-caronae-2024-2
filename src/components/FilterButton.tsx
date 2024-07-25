import Calendar from '../assets/calendar-icon.svg';

interface FilterButtonProps {
  text: string;
  isSelected: boolean;
}

export function FilterButton(props: FilterButtonProps) {
  return (
    <button 
      className={
        `py-2.5 px-4 border rounded-lg flex items-center gap-2
        ${props.isSelected 
          ? 'border-blue bg-[#F0F4FE]' 
          : 'border-[#DFDFDF] shadow-sm'
        }`
      }
    >
      {props.text === 'Segunda-feira, 22/07' 
      ? <img src={Calendar} alt='Ícone de calendário' height={20} />
        : <></>
      }

      <span 
        className={`text-sm font-semibold
          ${props.isSelected 
          ? 'text-blue'
          : 'text-gray'
          }`
        }
      >
        {props.text}
      </span>
    </button>
  )
}