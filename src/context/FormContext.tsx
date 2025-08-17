// src/context/FormContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type FormData = {
  name: string
  lastName?: string
  startDateType?: string
  startDate?: Date | undefined
  tripLength?: number
  vibe?: string[]
  people?: number
  startDestination?: string
  startDestinationInput?: string
  endDestination?: string
  endDestinationInput?: string
  transport?: string[]
  discountedCar?: string
  discountedBus?: string
  discountedCamper?: string
  accomodation?: string[]
  accomodationOther?: string
  hostel?: string[]
  activities?: string[]
  notes?: string
  email?: string
  whatsapp?: string
}

type FormContextType = {
  formData: FormData
  updateForm: (updates: Partial<FormData>) => void
}

const LOCAL_STORAGE_KEY = 'formData'

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useForm = (): FormContextType => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return context
}

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  }
  return {
    name: '',
    lastName: '',
    startDateType: '',
    startDate: undefined,
    tripLength: undefined,
    vibe: [],
    people: undefined,
    startDestination: '',
    startDestinationInput: '',
    endDestination: '',
    endDestinationInput: '',
    transport: [],
    discountedCar: '',
    discountedBus: '',
    discountedCamper: '',
    accomodation: [],
    hostel: [],
    accomodationOther: "",
    activities: [],
    notes: '',
    whatsapp: '',
    email: ''
  }
})


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
    console.log(formData)
  }, [formData])

  const updateForm = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  )
}
