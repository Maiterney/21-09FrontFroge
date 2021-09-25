import 'bootstrap/dist/css/bootstrap.min.css';
import Banners from '../components/Banners'
import Header from '../components/Header'
import Offers from '../components/Offers'
import Search from '../components/Search';

export default function Home() {
  return (
    <div className="content">
      <main className="main">
        <Header />
        <Banners />
        <Search />
        <Offers />
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"></script>
    </div>
  )
}
