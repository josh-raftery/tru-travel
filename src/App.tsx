import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './Pages/Start'
import Header from './components/Header'
import Name from './Pages/Name'
import StartDestination from './Pages/StartDestination'
import StartDate from './Pages/StartDate'
import DatePicker from './Pages/DatePicker'
import TripLength from './Pages/TripLength'
import Vibe from './Pages/Vibe'
import People from './Pages/People'
import StartDestinationInput from './Pages/StartDestinationInput'
import EndDestination from './Pages/EndDestination'
import Transport from './Pages/Transport'
import DiscountCar from './Pages/DiscountCar'
import DiscountCamper from './Pages/DiscountCamper'
import DiscountBus from './Pages/DiscountBus'
import Accomodation from './Pages/Accomodation'
import Hostels from './Pages/Hostels'
import AccomodationOther from './Pages/AccomodationOther'
import Activities from './Pages/Activities'
import AdditionalNotes from './Pages/AdditionalNotes'
import Contact from './Pages/Contact'
import { FormProvider } from './context/FormContext'
import EndDestinationInput from './Pages/EndDestinationInput'
import Finish from './Pages/Finish'

function App() {
  return (
    <div className='w-full'>
      <Header />
      <FormProvider>
        <div  className='w-full max-w-[700px] m-auto'>

        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='name' element={<Name />} />
          <Route path='startDate' element={<StartDate />} />
          <Route path='datePicker' element={<DatePicker />} />
          <Route path='tripLength' element={<TripLength />} />
          <Route path='vibe' element={<Vibe />} />
          <Route path='people' element={<People />} />
          <Route path='startDestination' element={<StartDestination />} />
          <Route path='startDestinationInput' element={<StartDestinationInput />} />
          <Route path='endDestination' element={<EndDestination />} />
          <Route path='endDestinationInput' element={<EndDestinationInput />} />
          <Route path='transport' element={<Transport />} />
          <Route path='discountedCar' element={<DiscountCar />} />
          <Route path='discountedCamper' element={<DiscountCamper />} />
          <Route path='discountedBus' element={<DiscountBus />} />
          <Route path='accomodation' element={<Accomodation />} />
          <Route path='hostels' element={<Hostels />} />
          <Route path='accomodationOther' element={<AccomodationOther />} />
          <Route path='activities' element={<Activities />} />
          <Route path='additionalNotes' element={<AdditionalNotes />} />
          <Route path='contact' element={<Contact />} />
          <Route path='finish' element={<Finish />} />
        </Routes>
        </div>
      </FormProvider>
    </div>
  )
}

export default App