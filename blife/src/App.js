import './App.css';
import Header from './components/Header';
import Body from './components/Body';

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
    </div>
  );
}

export default App;
