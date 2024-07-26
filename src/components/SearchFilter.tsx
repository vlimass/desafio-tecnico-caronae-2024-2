import Search from '../assets/search-icon.svg';

interface SearchFilterProps {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchFilter(props: SearchFilterProps) {
  return (
    <div className="min-w-80 h-11 mr-8 border border-[#DFDFDF] rounded-lg shadow-sm py-2.5 px-3.5 flex items-center gap-2">
      <img src={Search} alt='Ícone de busca' height={20} />

      <input 
        type="text" 
        placeholder="Buscar"
        className="w-full h-11 text-neutral-900 placeholder:text-gray outline-none bg-transparent border-none"
        onChange={e => props.setValue(e)}
        value={props.value}
      />
    </div>
  )
}