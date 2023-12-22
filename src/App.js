import Navbars from './Navbar'
import Create from './Create'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Alldata from './Alldata'
import LoanForm from './Loan'
import Bills from './Bills'
import Home from './Home'
import Login from './LoginForm'
import Register from './RegisterForm'
import userContext from './context'
import Footer from './Footer'
import {HashRouter,Routes,Route} from 'react-router-dom';
export default function App(){
return(
    <div>    
    <HashRouter>
    <userContext.Provider
          value={{
            users: [
              {
                name: "Harish",
                email: "xyz@gmail.com",
                password: "xyz",
                balance: 100
              }
            ]
          }}
        >
    <Navbars></Navbars>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/Deposit' element={<Deposit/>}></Route>
        <Route path='/Withdraw' element={<Withdraw/>}></Route>
        <Route path='/Alldata' element={<Alldata/>}></Route>
        <Route path='/Loan' element={<LoanForm/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Bill' element={<Bills/>}></Route>
    </Routes>
    </userContext.Provider>
    </HashRouter>
    <Footer></Footer>
    </div>
)
}