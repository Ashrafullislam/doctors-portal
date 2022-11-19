import './App.css';
import {RouterProvider} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import router from './Routes/Routes/Route';

function App () {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}> </RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#ffffff',
            color: 'black',
          },

          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: 'green',
              secondary: 'light',
            },
          },
          error:{
            duration:7000,
          }
        }}
      />
    </div>
  );
}

export default App;
