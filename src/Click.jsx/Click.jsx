function MouseClicker() {

    function handleClicker(event) {
        console.log(event.target.name);

        
        
    }

    function handleClickerimg(event) {

        console.log(event.target);
        
        
    }
    
    
    return(
        <>

        <button onClick={handleClickerimg} name="two"> <img width={20} height={30}/> click2</button>


         <button onClick={handleClicker} name="one">Click</button>
        
        </>
       
    )
}

export default MouseClicker