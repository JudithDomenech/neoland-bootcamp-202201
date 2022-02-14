import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Logo from './Logo'
import Landing from './Landing'


function Home({ token, onLogout, }) {
    // const token = props.token
    //const { token } = props
   
    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
   
    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goToProfile = event => {
        event.preventDefault()

        showProfile()
    }

    const showProfile = () => setView('profile')

    const showUpdatePassword = () => setView('update-password')

    const showDeleteAccount = () => setView('delete-account')

    const goToSearch = event => {
        event.preventDefault()

        showSearch()
    }

    const showSearch = () => setView('search')

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch}><Logo/></a>
            <h1 className="home__user">{name}</h1>
            <a href="">Favs</a>
            <a className="home__profile-link" href="" onClick={goToProfile}> Profile</a>
            <button className="home__logout-button" onClick={onLogout}> Logout</button>
        </div>

        {view === 'search' && <Search />}

        {view === 'profile' && <Profile  token={token} onUpdatePassword={showUpdatePassword} onDeletedAccount={showDeleteAccount}/>}

        {view === 'landing' && <Landing />}

        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}

        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout}/>}
    </div>
}

export default Home