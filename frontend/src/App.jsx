import React from 'react'
import { Route, Routes } from 'react-router'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import OnboardingPage from './pages/OnboardingPage'
import HomePage from './pages/HomePage'
import NotificationsPage from './pages/NotificationsPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import axios from 'axios'
import {useQuery} from "@tanstack/react-query"

import toast, { Toaster } from "react-hot-toast";

const App = () => {

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }

  const{data, isLoading, error} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data)

  return (
    <div className='bg-red-500 h-screen' data-theme="night">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/call' element={<CallPage/>} />
        <Route path='/notifications' element={<NotificationsPage />} />
        <Route path="/onboarding" element={<OnboardingPage/>} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App