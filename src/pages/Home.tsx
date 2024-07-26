import { useEffect, useState } from 'react';
import Logo from '../assets/home-logo.svg';
import { FilterButton } from '../components/FilterButton';
import { SearchFilter } from '../components/SearchFilter';
import { RideCard } from '../components/RideCard';
import { api } from '../lib/axios';
// import { useNavigate } from 'react-router-dom';

interface Ride {
  motorista: {
    nome: string,
    situacao: string,
    telefone: string,
    foto: string
  };
  vagas: number;
  horario_partida: string;
  horario_chegada: string;
  local_partida: string;
  local_chegada: string;
  ponto_encontro: string;
  observacoes: string;
  trajeto: string;
  indo: boolean;
}

export function Home() {
  const [isSelected, setIsSelected] = useState<boolean>(true)
  const [rides, setRides] = useState<Ride[]>([])
  // const navigate = useNavigate();

  const handleIsSelected = (isArrivingAtUFRJ : boolean) => {
    if (isArrivingAtUFRJ) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }

  // const handleCardClick = (index : number) => {
  //   navigate(`/details/${rides![index]}`)
  // }

  async function fetchRides() {
    const response = await api.get('/753cf50d-4bec-427f-bd07-e49387240ee3')

    setRides(response.data.caronas)
  }

  useEffect(() => {
    fetchRides()
  }, [])

  return (
    <main className='min-h-main flex flex-col mt-[83px]'>
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

        <div className='flex items-center flex-wrap gap-6 mt-6'>
          {rides.map((ride, index) => 
            <RideCard 
              key={index}
              driver={{
                name: ride.motorista.nome,
                profilePhoto: ride.motorista.foto,
              }}
              ride={{
                spaces: ride.vagas,
                departureLocation: ride.local_partida,
                arrivalLocation: ride.local_chegada,
                departureTime: ride.horario_partida,
                arrivalTime: ride.horario_chegada,
              }}
            />  
          )}
        </div>

      </div>
    </main>
  )
}