import Header from './components/Header/Header'
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Header />
    <div className="App">
      이동엽 <br />
      리액트를 공부하고 있습니다. <br />
      숭실대학교 소프트웨어학부 22학번 입니다.
    </div>
    <Footer />
    </>
  );
}

export default App;
