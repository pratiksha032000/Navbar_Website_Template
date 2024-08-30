import React from 'react'
import NB1 from './NB1'

import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<NB1 />} />
    
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App