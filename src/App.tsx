import { Route, Routes, useLocation } from 'react-router-dom'
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
import EndDestinationInput from './Pages/EndDestinationInput'
import Finish from './Pages/Finish'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import { FormProvider } from './context/FormContext'
import PageWrapper from './components/PageWrapper'

function App() {
  const location = useLocation()

  return (
    <div className='w-full h-full'>
      <Header />
      <FormProvider>
        <div className='w-full max-w-[700px] m-auto mt-10 bg-white'>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<PageWrapper><Start /></PageWrapper>} />
              <Route path='name' element={<PageWrapper><Name /></PageWrapper>} />
              <Route path='startDate' element={<PageWrapper><StartDate /></PageWrapper>} />
              <Route path='datePicker' element={<PageWrapper><DatePicker /></PageWrapper>} />
              <Route path='tripLength' element={<PageWrapper><TripLength /></PageWrapper>} />
              <Route path='vibe' element={<PageWrapper><Vibe /></PageWrapper>} />
              <Route path='people' element={<PageWrapper><People /></PageWrapper>} />
              <Route path='startDestination' element={<PageWrapper><StartDestination /></PageWrapper>} />
              <Route path='startDestinationInput' element={<PageWrapper><StartDestinationInput /></PageWrapper>} />
              <Route path='endDestination' element={<PageWrapper><EndDestination /></PageWrapper>} />
              <Route path='endDestinationInput' element={<PageWrapper><EndDestinationInput /></PageWrapper>} />
              <Route path='transport' element={<PageWrapper><Transport /></PageWrapper>} />
              <Route path='discountedCar' element={<PageWrapper><DiscountCar /></PageWrapper>} />
              <Route path='discountedCamper' element={<PageWrapper><DiscountCamper /></PageWrapper>} />
              <Route path='discountedBus' element={<PageWrapper><DiscountBus /></PageWrapper>} />
              <Route path='accomodation' element={<PageWrapper><Accomodation /></PageWrapper>} />
              <Route path='hostels' element={<PageWrapper><Hostels /></PageWrapper>} />
              <Route path='accomodationOther' element={<PageWrapper><AccomodationOther /></PageWrapper>} />
              <Route path='activities' element={<PageWrapper><Activities /></PageWrapper>} />
              <Route path='additionalNotes' element={<PageWrapper><AdditionalNotes /></PageWrapper>} />
              <Route path='contact' element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path='finish' element={<PageWrapper><Finish /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
      </FormProvider>
    </div>
  )
}

export default App