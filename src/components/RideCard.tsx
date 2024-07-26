import People from '../assets/people-icon.svg';
import Target from '../assets/target-icon.svg';
import Flag from '../assets/flag-icon.svg';

interface RideCardProps {
  driver: {
    name: string;
    profilePhoto: string;
  };
  ride: {
    spaces: number;
    departureLocation: string;
    arrivalLocation: string;
    departureTime: string;
    arrivalTime: string;
  }
}

export function RideCard(props: RideCardProps) {
  return (
    <div className="min-w-[21.2rem] shadow-sm border border-[#DFDFDF] rounded-lg px-6 pt-6 pb-4">
      <div className="flex items-center justify-between mb-6">
        <div className='flex items-center gap-2'>
          <img
            src={props.driver.profilePhoto}
            alt="Foto Motorista"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="font-semibold">
            {props.driver.name}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <img
            src={People}
            alt='Ícone de pessoas'
            height={20}
          />
    
          <span className='text-[#17b270] font-semibold'>
            {props.ride.spaces}
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4 mb-3'>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-sm text-neutral-900'>
            {props.ride.departureLocation}
          </span>
          <img src={Target} alt='Ícone de alvo' height={20}/>
        </div>
        <div className='w-[105.2px] h-[20.82px] bg-neutral-900 rounded-[6.9px] p-[9.2px] flex items-center gap-[9.2px]'>
          <div className='w-[10px] h-[2.42px] rounded-[1.84px] bg-white'/>
          <div className='w-[10px] h-[2.42px] rounded-[1.84px] bg-white'/>
          <div className='w-[10px] h-[2.42px] rounded-[1.84px] bg-white'/>
          <div className='w-[10px] h-[2.42px] rounded-[1.84px] bg-white'/>
          <div className='w-[10px] h-[2.42px] rounded-[1.84px] bg-white'/>
        </div>
        <div className='flex items-center gap-2'>
          <img src={Flag} alt='Ícone de bandeira' height={20}/>
          <span className='font-medium text-sm text-neutral-900'>
            {props.ride.arrivalLocation}
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <span className='font-semibold text-neutral-900 text-2xl'>
          {props.ride.departureTime}
        </span>
        <span className='font-semibold text-neutral-900 text-2xl'>
          {props.ride.arrivalTime}
        </span>
      </div>
    </div>
  )
}