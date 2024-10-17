import './Car.css'
const Car=()=>{
    let count=50;
    console.log(count);

    function increase(){
        count = count + 1;
        console.log(count);   
    }
    function view(bike){
        console.log("Bike name is:"+bike);
    }
    
    return(
        <div className="car">
            <h1>This is My Css Page</h1>
            <h2>count the Number: {count}</h2>
            <button onClick={()=>{view("Splendor")}}>View</button>
            <button onClick={increase}>Increase</button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzv9-03GDcfzl26yD1iR0DG1U_IXyh1aKlWw&s" alt="" />
        </div>
    )
}
export default Car