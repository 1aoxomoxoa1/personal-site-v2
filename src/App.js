import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div onLoad={() => console.log('loaded')}>
        <AppRouter> </AppRouter>
      </div>
  );
}

export default App;
