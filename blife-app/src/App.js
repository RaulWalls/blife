import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
        <Header
        image='logo'
        link1='Productos'
        link2='Promociones'
        link3='Nosotros'
        user1='search'
        user2='user'
        user3='shopping-bag'
        notification='2'
        hero='hero'
        />

        <Body
        />
        <Footer
        signature='Banana Brain'/>
    </div>
  );
}

export default App;
