import Profile from '../components/Profile';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}

export default Profile;
