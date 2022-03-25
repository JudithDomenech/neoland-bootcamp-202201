import './App.sass'
import {
  Register,
  Login,
  Home,
  Profile,
  ListFavoritesRackets,
  SearchUserRacket,
  HeaderBar,
  MenuBar

} from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'

const { validateToken } = validators

function App() {
  
  const isValidToken = () => {
    try {
      validateToken(sessionStorage.token)
      return true
    }
    catch (error) {
      alert(error.message)
      return false
    }
  }

  const navigate = useNavigate()
  const showLogin = () => navigate('login')
  const showRegister = () => navigate('register')
  const showHome = () => navigate('/')


  return <div>
    <HeaderBar></HeaderBar>
    <MenuBar></MenuBar>
    <Routes>
      <Route path="/" element={<Home onRegistered={showLogin} onLogin={showLogin} />} />
      <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="login" element={!sessionStorage.token ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="page-not-found" element={!sessionStorage.token ? <h1>Sorry, esta pag no existe :P</h1> : <Navigate replace to="/" />} />
      <Route path="/*" element={<Navigate replace to ='page-not-found'/>} />
      {/* <Route path='profile' element={<Profile />} />
      <Route path='favorites' element={<ListFavoritesRackets />} />
      <Route path='tu-pala' element={<SearchUserRacket />} />  */}
    </Routes>

  </div>

}

export default App
