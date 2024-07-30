import { dateFormatted } from '../utils/dateFormatted';

import People from '../assets/people-icon.svg';
import Target from '../assets/target-icon.svg';
import Flag from '../assets/flag-icon.svg';

import { DetailsCard } from "../components/DetailsCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { useLocation } from 'react-router-dom';
import { Ride } from './Home';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';

export function RideDetails() { 
  const { state } = useLocation();
  const ride : Ride = state.ride

  return (
    <main className="min-h-main flex flex-col items-center mt-[83px] py-24">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-3xl text-blue">
            {dateFormatted}
          </span>
          <PrimaryButton text="Pedir Carona"/>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <DetailsCard title="Carona para a UFRJ">
            <>
              <div className='flex items-center justify-between gap-4 mb-3'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-sm text-neutral-900'>
                  {ride.local_partida}
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
                    {ride.local_chegada}
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-semibold text-neutral-900 text-2xl'>
                  {ride.horario_partida}
                </span>
                <span className='font-semibold text-neutral-900 text-2xl'>
                  {ride.horario_chegada}
                </span>
              </div>
            </>
          </DetailsCard>
        

          <DetailsCard title='Vagas disponíveis'>
            <div className='flex items-center gap-2'>
              <img
                src={People}
                alt='Ícone de pessoas'
                height={20}
              />
        
              <span className='text-[#17b270] font-semibold'>
                {ride.vagas} vagas
              </span>
            </div>
          </DetailsCard>
          

          <DetailsCard title={ride.motorista.nome}>
            <div className='flex items-center gap-2'>
              <img
                src={ride.motorista.foto}
                alt="Foto do Motorista"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className='flex flex-col items-start gap-1.5 text-gray text-lg'>
                <span>{ride.motorista.situacao}</span>
                <span>
                  {formatPhoneNumber(ride.motorista.telefone)}
                </span>
              </div>
            </div>
          </DetailsCard>

          <DetailsCard title='Ponto de Encontro'>
            <p className='text-lg text-gray'>
              {ride.ponto_encontro}
            </p>
          </DetailsCard>

          <DetailsCard title='Informações Adicionais'>
            <p className='text-lg text-gray'>
              {ride.observacoes}
            </p>
          </DetailsCard>

          <DetailsCard title='Trajeto'>
            <div className='flex items-center gap-3'>
              <div className='w-[20.82px] bg-neutral-900 rounded-[6.9px] p-[9.2px] flex flex-col items-center gap-[9.2px]'>
                {ride.trajeto.split(',').map(() => 
                  <div className='w-[2.42px] h-[15px] rounded-[1.84px] bg-white'/>
                )}
              </div>

              <div className='flex flex-col justify-between text-lg text-gray'>
                {ride.trajeto.split(',').map(item => 
                  <span>{item}</span>
                )}
              </div>
            </div>
          </DetailsCard>
        </div>
      </div>
    </main>
  )
}