import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetail from './pages/RoomDetail'
import BranchPage from './pages/BranchPage'
import AllBranches from './pages/AllBranches'
import M yBookings from './pages/MyBookings'
import Experience from './pages/Experience'
import About from './pages/About'
import Hospitality from './pages/Hospitality'
import AllOffers from './pages/AllOffers'
import OfferDetail from './pages/OfferDetail'
import {
  CareersPage,
  PressPage,
  BlogPage,
  PartnersPage,
  HelpPage,
  SafetyPage,
  CancelPolicyPage,
  SupportPage,
  AccessPage,
} from './pages/footer/createFooterPage'
import LayOut from './pages/hotelOwner/LayOut'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import AddHospitality from './pages/hotelOwner/AddHospitality'
import ListHospitality from './pages/hotelOwner/ListHospitality'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PendingApproval from './pages/hotelOwner/PendingApproval'
import OwnerProfile from './pages/hotelOwner/OwnerProfile'
import AdminDashboard from './pages/admin/AdminDashboard'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader'
import AuthGuard from './components/AuthGuard'

const App = () => {
  const path = useLocation().pathname;
  const isOwnerPath = path.startsWith("/owner") && path !== "/owner/pending";
  const isAdminPath = path.startsWith("/admin");
  const isPendingPath = path === "/owner/pending";
  const isAuthPage = ['/login', '/signup'].includes(path);
  const hidePublicChrome = isOwnerPath || isAuthPage || isAdminPath || isPendingPath;

  return (
    <AuthGuard>
      <div>
        <Toaster />
        {!hidePublicChrome && <Navbar />}

        <div className='min-h-[70vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rooms' element={<AllRooms />} />
            <Route path='/rooms/:id' element={<RoomDetail />} />
            <Route path='/branches' element={<AllBranches />} />
            <Route path='/branch/:slug' element={<BranchPage />} />
            <Route path='/my-bookings' element={<MyBookings />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/hospitality' element={<Hospitality />} />
            <Route path='/offers' element={<AllOffers />} />
            <Route path='/offers/:id' element={<OfferDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<CareersPage />} />
            <Route path='/press' element={<PressPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/partners' element={<PartnersPage />} />
            <Route path='/help' element={<HelpPage />} />
            <Route path='/safety' element={<SafetyPage />} />
            <Route path='/cancel-policy' element={<CancelPolicyPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/access' element={<AccessPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/loader/:nextUrl' element={<Loader />} />
            <Route path='/owner/pending' element={<PendingApproval />} />
            <Route path='/admin' element={<AdminDashboard />} />

            <Route path='/owner' element={<LayOut />}>
              <Route index element={<Dashboard />} />
              <Route path='add-room' element={<AddRoom />} />
              <Route path='list-room' element={<ListRoom />} />
              <Route path='add-hospitality' element={<AddHospitality />} />
              <Route path='list-hospitality' element={<ListHospitality />} />
              <Route path='profile' element={<OwnerProfile />} />
            </Route>
          </Routes>
        </div>

        {!hidePublicChrome && <Footer />}
      </div>
    </AuthGuard>
  )
}

export default App
