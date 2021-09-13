import logo from './logo.svg';
import './App.css';
import Upper from './components/Upper'
import Mid from './components/Mid'
import Down from './components/Down'

function App() {
  return (
    <>
    <div class="App">
      <div class="Upper-css">
          <Upper/>
        </div>
      <div class="Mid-css">
          <Mid/>
      </div>
      <div class="Down-css">
          <Down/>
      </div>
    </div>
    </>
  );
}

export default App;
