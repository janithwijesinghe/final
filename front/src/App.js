import {Route, Routes} from 'react-router-dom';
import Header from './components/main components/Header';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs'
import LeoClub from './components/Pages/LeoClub'
import LCIF from './components/Pages/LCIF'
import Member from './components/Pages/Member'
import Events from './components/Pages/user'
import Conference from './components/Pages/Conference'
import Join from './components/Pages/Join';
import Donation from './components/Pages/Donation'
import Services from './components/Pages/Services'
import Leadership from './components/Pages/Leadership'
import Event from "./components/Pages/event";
import Poll from "./components/Pages/poll";
import User from "./components/Pages/user";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer'
import './App.css';


function App() {
    return (
        <div className="App">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
            />
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/leoclub' element={<LeoClub/>}/>
                <Route path='/lcif' element={<LCIF/>}/>
                <Route path='/member' element={<Member/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/conference' element={<Conference/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path='/donate' element={<Donation/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/leadership' element={<Leadership/>}/>
                <Route path='/admin/event' element={<Event/>}/>
                <Route path='/admin/poll' element={<Poll/>}/>
                <Route path='/user' element={<User/>}/>
            </Routes>
            <Footer/>

            {/* <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes> */}
        </div>
    );
}

export default App;
