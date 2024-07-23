interface FilterButtonProps {
  text: string;
  isSelected: boolean;
}

export function FilterButton(props: FilterButtonProps) {
  return (
    <button 
      className={
        `py-2.5 px-4 border rounded-lg 
        ${props.isSelected 
          ? 'border-blue bg-[#F0F4FE]' 
          : 'border-[#DFDFDF] shadow-sm'
        }`
      }
    >
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