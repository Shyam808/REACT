// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Card from './Card.jsx';
// import Fan from './Fan.jsx';

// const App = () => {
//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}>
//         <Link to="/card">Card</Link>
//         <Link to="/fan">Fan</Link>
//       </div>

//       <Routes>
//         <Route path="/card" element={<Card />} />
//         <Route path="/fan" element={<Fan />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Product from './Products';
import AddSeller from './AddSeller';
import Home from './Home';
import Login from './Login';



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addseller" element={<AddSeller />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
