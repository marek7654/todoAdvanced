import './App.css';
import Header from './components/Header';
import Card from './UI/Card';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Card title="To jest test">
            <p>Lorem ipsum...</p>
            <p>Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... Lorem ipsum... </p>
          </Card>
        </div>
      </main>
    </>
  );
}

export default App;
