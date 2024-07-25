interface PrimaryButtonProps {
  text: string;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button 
      className='bg-blue text-white text-sm font-semibold px-4 py-2.5 rounded-lg border border-blue hover:text-blue hover:bg-white transition-all'
    >
      {props.text}
    </button>
  )
}