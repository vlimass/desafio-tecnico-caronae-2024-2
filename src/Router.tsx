import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RideDetails } from './pages/RideDetails';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/' element={<Home />} />
        {/* Usando o index na rota pois as caronas não possuem id */}
        <Route path='/details/:index' element={<RideDetails />} />  
      </Route>
    </Routes>
  )
}