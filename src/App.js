import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route, Link, NavLink, useLocation, useParams} from "react-router-dom";
import { useAuth } from "./auth";
import ProtectedRoute from "./ProtectedRoute";
import './App.css'

function App(){
  const auth = useAuth();

  const logOut = () => {
    auth.logout();
  }
  return (
    <>
    <div className="App">
      {auth && auth.login && 
      (<nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink onClick={logOut}>Logout</NavLink>
       </nav>)
      }
    </div>
    
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/home" 
            element={ <ProtectedRoute>
                          <Home />
                      </ProtectedRoute>} />
      <Route path="/books" 
            element={ <ProtectedRoute>
              <Books />
          </ProtectedRoute>}
      />
      <Route path="/books/:id" 
            element={ <ProtectedRoute>
              <BookDetails />
          </ProtectedRoute>}
      />
      <Route path="*" element={<Login />} />

    </Routes>

    

    </>
  )
}

export const Home = () => {
  return(
    <div>
      <h1>Welcome to our Website!!</h1>
    </div>
  )
};

export const Books = () => {
  const books = [
    {
      id: 1,
      name: "Book 1"
    },
    {
      id: 2,
      name: "Book 2"
    },
    {
      id: 3,
      name: "Book 3"
    },
    {
      id: 4,
      name: "Book 4"
    }
  ]

  return (
    <div>
      {books.map((book, index)=>{
        return(
          <li key={index}>
            <Link to={`./${book.id}`} state={{name: book.name}}>{book.name}</Link>
          </li>
          
        )
      })}
    </div>
  )
  
}; 

export const BookDetails = () => {
  const {id} = useParams();
  const location = useLocation()
  console.log(id, location)

  return (
    <div>Book with {id} and name {location.state.name} </div>
  )
  
}
export default App;
