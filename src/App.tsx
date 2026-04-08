
import { Navbar } from "./Components/navbar";
import { Main} from "./Cards/Main";
import { About } from "./Cards/About";
import { Projects } from "./Cards/Projects";

export function App() {
  return (
    
    <div>
      <div className="min-h-screen bg-zinc-100 ">
        <Navbar/> 
        
        <li className="snap-y snap-mandatory">
          <Main/> 
          <About/> 
          <Projects/> 
        </li>
        
      </div>
    </div>
    
  );
}

export default App;
