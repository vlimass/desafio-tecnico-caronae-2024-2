import { api } from '../lib/axios';
import { dateFormatted } from '../utils/dateFormatted';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/home-logo.svg';

import { SearchFilter } from '../components/SearchFilter';
import { FilterButton } from '../components/FilterButton';
import { RideCard } from '../components/RideCard';

export interface Ride {
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
  const [rides, setRides] = useState<Ride[]>([])
  const [isArrivingAtUFRJ, setisArrivingAtUFRJ] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  const handleIsArrivingAtUFRJ = (isArriving : boolean) => {
    if (isArriving) {
      setisArrivingAtUFRJ(true)      
    } else {
      setisArrivingAtUFRJ(false)
    }
  }

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleCardClick = (ride : Ride, index : number) => { 
    navigate(`/details/${index}`, { state: { ride }})
  }

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
            <FilterButton text={dateFormatted} isSelected={true} />
            <div className='h-11 w-[1px] bg-[#E4E7EC] '/>
            <div onClick={() => handleIsArrivingAtUFRJ(true)}>
              <FilterButton text='Chegando na UFRJ' isSelected={isArrivingAtUFRJ} />
            </div>
            <div onClick={() => handleIsArrivingAtUFRJ(false)}>
              <FilterButton text='Saindo da UFRJ' isSelected={!isArrivingAtUFRJ} />
            </div>
          </div>

          <SearchFilter
            value={searchValue}
            setValue={handleSearchValue}
          />
        </div>

        <div className='flex items-center flex-wrap gap-6 mt-6'>
          {rides
          .filter(ride => {
            if(isArrivingAtUFRJ) {
              return ride.local_chegada === 'Fundão'
            } else {
              return ride.local_chegada !== 'Fundão'
            }})
          .filter(ride => 
            ride.motorista.nome.toLowerCase().includes(searchValue.toLowerCase()) 
            || ride.vagas.toString().includes(searchValue) 
            || ride.local_partida.toLowerCase().includes(searchValue.toLowerCase()) 
            || ride.local_chegada.toLowerCase().includes(searchValue.toLowerCase()) 
            || ride.horario_partida.toLowerCase().includes(searchValue.toLowerCase()) 
            || ride.horario_chegada.toLowerCase().includes(searchValue.toLowerCase()) 
          )
          .map((ride, index) => 
            <div
              className='cursor-pointer hover:bg-zinc-100 hover:rounded-lg hover:transition-all hover:duration-500'
              onClick={() => handleCardClick(ride, index)}
            >
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
            </div>
          )}
        </div>

      </div>
    </main>
  )
}