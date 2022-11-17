import './App.css';
import { RouterProvider } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

import router from './Routes/Routes/Route';

function App() {
  return (
    <div className= 'max-w-[1400px] mx-auto' >
      <RouterProvider router={router} > </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
