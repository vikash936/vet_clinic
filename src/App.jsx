





import pic from "./img/vector.png";
import pi from "./img/Search Button.png";
import './App.css';
import About from "./about";
import { Link,Route,Routes} from "react-router-dom";
import Service from "./service";
import Home from "./home";
import Contact from "./contact";
// import drl from ".//img/Working At An Animal Hospital Can Be Totally Awesome (25 Pics).jpg"

function App(){
  return(
    <>
    <div className="head row p-2 bg-warning  ">
      <div className="logo mt-1   col"><img src={pic} alt="img"></img></div>
      <div className="col navbar  justify-content-center ">
        <nav className="navbar-nav nav d-flex flex-row  " id="nav" >
          <Link to='./home ' className="nav-item p-3 " style={lstyle}>Home</Link>
          <Link to='/about' className="nav-item p-3 "style={lstyle}>About</Link>
          <Link to='/service' className="nav-item p-3"style={lstyle}>Service</Link>
          <Link to='/contact' className="nav-item p-3"style={lstyle}>Contact</Link>
        </nav>      
      </div>
      <div className="search col justify-content-right ">
      <input type="text " className="inp p-2" placeholder="Search"></input>
      <a href="./app"><img src={pi} alt="img" className="p-1 bg-primary icon"></img></a>
      
      </div>
    </div>
    <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    <div className="dr" id="dr">
      {/* <img src={drl} className="husky" alt="img"></img> */}
      
    </div>
    
    
    
    </>
  )
}

const lstyle ={
  textDecoration:"none",
  color:"white",
  fontSize:"25px",
  fontWeight:"bold",
};

export default App;


/* <h1 className=" text-light dolil ">
        Dr.Dolittle
       </h1>
      <p className="lil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam delectus ullam blanditiis neque maiores voluptatum nobis eligendi labore, ipsum enim at voluptas voluptatem nihil perspiciatis repellendus maxime harum quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti porro iusto debitis vitae, repellat temporibus culpa a explicabo, odio nam error veritatis quasi incidunt corporis distinctio modi! Doloribus, quasi velit?</p>  */
