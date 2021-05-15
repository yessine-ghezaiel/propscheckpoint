import './App.css';
import Profile from './profile/Profile';
import img from './picyess.jpg'

function App() {
  const fullName ="Yessine Ghezaiel"
  const bio= "Future web developer"
  const profession= "GoMyCode student"
  const alertMe=() =>{
    alert(fullName)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName={fullName} bio={bio} profession={profession} alertMe={alertMe} > 
          <img src={img} style= {{height: 500}} />         
        </Profile>
      </header>
    </div>
  );
}




export default App;
