import './App.css';
// import Container from './components/container';
import Footer from './components/footer';
import Header  from './components/header';
import Login from './components/login';
function App() {
  return (
    <div className='page'>
  <Header />
  <Login/>
  <Footer />
    </div>
  );
}

export default App;
