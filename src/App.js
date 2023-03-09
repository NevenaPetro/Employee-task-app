import { ApplicationProvider } from './context/AplicationContext';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <ApplicationProvider
      //</>value={{}}
      >
        <Header />
      </ApplicationProvider>
    </>
  );
}

export default App;
