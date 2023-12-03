import './App.css';
import {useState} from 'react'

function App() {

  let [todos, setTodos] = useState([]);

  let [item, setItem] = useState('');

  const itemchan = (e)=>{

    setItem(e.target.value);

  }

  function addItemToList(){


    setTodos([...todos,item]); 

    setItem('')
  }

  function itemed(index, e){

    let tempArr = [...todos];

    for(let i = 0; i < tempArr.length; i++){

      if(i === index){

        tempArr[i] = e.target.value;
      }
    }

    setTodos(tempArr)

    console.log(todos);
  }

  function itemdel(index){


    let tempArr = [...todos];

    let tempArr2 = [];

    for(let i = 0; i < tempArr.length; i++){

      if(i === index){
        
        continue;
      }
      else{
        tempArr2.push(tempArr[i])
      }
    }
    setTodos(tempArr2)
  }

  return (
    <>
      <div className='box'>
        <div className='inputSection'>

          <input type="text" value={item} onChange={(e)=>itemchan(e)}/>

          <button className='add' type='submit' onClick={addItemToList}>Add Tasks</button>

        </div>
        <div className='rish'>
        
        {todos.map((todo, index)=>{
          return(
            <div key={index}>


              <input className='del' type="text" value={todo} onChange={(e)=>itemed(index, e)}/>


              <button className='del' type='submit' onClick={()=>itemdel(index)}>Delete Task</button>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App