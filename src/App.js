

import Header from './components/header/Header'
import PersonInfo from './components/personInfo/PersonInfo'
// import ReviewModal from './components/reviewModal/ReviewModal'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'


import polzuha from './resourses/img/polzuha.svg'

// import messageError from './resourses/img/message-error.svg'

import './scss/style.scss'

function App() {

  

  return (
    <div className="app">
      <div className="container">
        <img width="827.73" height="1610" src={polzuha} alt="polzuha" className="polzuha"/>
        <Header />
        <PersonInfo />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

export default App;
