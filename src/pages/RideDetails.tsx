import People from '../assets/people-icon.svg';
import Target from '../assets/target-icon.svg';
import Flag from '../assets/flag-icon.svg';

import { DetailsCard } from "../components/DetailsCard";
import { PrimaryButton } from "../components/PrimaryButton";

export function RideDetails() {
  return (
    <main className="min-h-main flex flex-col items-center mt-[83px] py-24">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-3xl text-blue">
            Segunda-feira, 22/07
          </span>
          <PrimaryButton text="Pedir Carona"/>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <DetailsCard title="Carona para a UFRJ">
            <>
              <div className='flex items-center justify-between gap-4 mb-3'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-sm text-neutral-900'>
                  Leblon
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
                    Fundão
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-semibold text-neutral-900 text-2xl'>
                  08:00
                </span>
                <span className='font-semibold text-neutral-900 text-2xl'>
                  10:00
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
                4 vagas
              </span>
            </div>
          </DetailsCard>
          

          <DetailsCard title='Hugo freitas'>
            <div className='flex items-center gap-2'>
              <img
                src="https://s3-alpha-sig.figma.com/img/0dbc/439f/27d076531760843c12071cb3cee5def5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf2TYuXpYCtAUsYrSQxFBkyKoL8PSCpq0UxDtPCAAE2io7WNiB202bvY6-UAyHyLECmXI0bEw9j4O2VwRg2P8Yu1yF1f8ci86VhDzqb7FOhVAWFtzv2u07RFnk9YItotFcxzNcPh2ngAE2-vBdAtlpJ6-4x2DtfvHYBIwnHWh7EC1NmQIyBASqOVLNAUGylYs5aPIBwjirk7eiCfv7m9C1wiRy2~-1J8xnQMmiFaCFh2VhXJDrB-graKwduhlXKkF1dTzA2q0ojUA5RBszSyt0R3EurYhOgj~DIRBYbS5YhTDPc1GExPNOZaNg5C9Bx6gQekVzYrD5QqSuAdlO39uA__"
                alt="Foto Motorista"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className='flex flex-col items-start gap-1.5 text-gray text-lg'>
                <span>Graduando</span>
                <span>
                  (21) 0000-00000
                </span>
              </div>
            </div>
          </DetailsCard>

          <DetailsCard title='Ponto de Encontro'>
            <p className='text-lg text-gray'>
              Aguardarei próximo ao Shopping e esperarei até 08:15 para todos chegarem e partir.
            </p>
          </DetailsCard>

          <DetailsCard title='Informações Adicionais'>
            <p className='text-lg text-gray'>
              Aguardarei próximo ao Shopping e esperarei até 08:15 para todos chegarem e partir.
            </p>
          </DetailsCard>

          <DetailsCard title='Trajeto'>
            <div className='flex items-center gap-3'>
              <div className='w-[20.82px] h-[81.8px] bg-neutral-900 rounded-[6.9px] p-[9.2px] flex flex-col items-center gap-[9.2px]'>
                <div className='w-[2.42px] h-[15px] rounded-[1.84px] bg-white'/>
                <div className='w-[2.42px] h-[15px] rounded-[1.84px] bg-white'/>
                <div className='w-[2.42px] h-[15px] rounded-[1.84px] bg-white'/>
              </div>

              <div className='flex flex-col justify-between text-lg text-gray'>
                <span>Botafogo</span>
                <span>Ipanema</span>
                <span>Lapa</span>
              </div>
            </div>
          </DetailsCard>
        </div>
      </div>
    </main>
  )
}