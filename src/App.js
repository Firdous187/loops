import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <button onClick={()  => {
   for(let i = 1; i<=100;i++){
    console.log(i);

    if(i==5){
      continue;
    }

    if(i==6){
      continue;
    }

    if(i==7){
      continue;
    }

    if(i==8){
      continue;
    }

    if(i==9){
      continue;
    }

    if(i==15){
      continue;
    }

    if(i==25){
      continue;
    }

    if(i==34){
      continue;
    }

    if(i==46){
      continue;
    }

    if(i==57){
      continue;
    }

    if(i==68){
      continue;
    }

    if(i==79){
      continue;
    }

    if(i==93){
      continue;
    }

    if(i==97){
      continue;
    }

    for(let j=1;j<=100;j++){
      
      if (
        j == 11 ||
        j == 12 ||
        j == 15 ||
        j == 19 ||
        j == 23 ||
        j == 27 ||
        j == 46 ||
        j == 54 ||
        j == 73
      ) {
        continue;
      }

      console.log(` ${i}*${j} =${i*j}`);

    }


   }
   }
    }> Loops
         
      </button>

    <button onClick={()=>{
       let engMarks=0;
       if (engMarks >= 35) {
        console.log("Student Passed in English");
      }
    }}>
     if Condition
    </button>

    <button onClick={()=>{
    let telMarks=88;
    while(telMarks >=35){
      console.log(`${telMarks}`);
    }
    }}>
      while
    </button>

    <button onClick={() =>{
     let hinMarks=99;
     do{
       console.log(`do while ${hinMarks}`);
       hinMarks--;

     }while(hinMarks >= 35){

     }
    }}>
   Do while
    </button>
    </div>
  );
}

export default App;
