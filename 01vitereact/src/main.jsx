import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
   return(
      <div>
         <h1>Custom App</h1>
      </div>
   )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// };

const anotherElement = (
   <a href="https://google.com" target ='_blank'>Click me to visit google</a>
)

const anotherUser = "chai aur pulkit"

const reactElement = React.createElement(
   'a',
   {
      href: 'https://google.com',
      target: '_blank'
   },
   'click me to visit google',   
)

ReactDOM.createRoot(document.getElementById('root')).render(
   //  <React.StrictMode>
   //   <App />   
   //  <Chai /> 
   // 
   
   reactElement
   //  </React.StrictMode>
)
