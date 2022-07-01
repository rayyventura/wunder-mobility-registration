import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registration from './Pages/Registration';
import "./App.scss"
import { FormProvider } from './contexts/formcontext';


function App() {

  return (

    <FormProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Registration />} />
        </Routes>
      </Router>
    </FormProvider>

  );
}

export default App;
