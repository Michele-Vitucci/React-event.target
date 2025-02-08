import MouseClicker from "./Click.jsx/Click";
import Clock from "./Clock";
import Counter from "./Contatore";


function App() {

    return(

        <>
        <Counter  initialValue={3} incrementAmount={3} />
        <Clock/>
        <MouseClicker/>
        
        </>

       
    )
    
}

export default App