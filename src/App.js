import logo from './logo.svg';
import './App.css';
import  {useState} from 'react'

function App() {

  const [transactions, setTransactions] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [balance, setBalance] = useState(500)

  function handleTitle(event){
    setTitle(event.target.value)
  }

  function handleAmount(event){
    setAmount(event.target.value)
  }

  function handleInButton(){
    setTransactions((val) => {
      return [...val, {title:title, amount:amount, type:"In"}]
    });

    setBalance((val) =>{
      return val+parseInt(amount)
    })
  }

  function handleOutButton(){
    setTransactions((val) => {
      return [...val , {title:title, amount:amount, type:"Out"}]
    });
    setBalance((val) =>{
      return val-parseInt(amount)
    })

  }
  return (

    <div className='App'>
      <div className='content'>
        <div className='add-container'>
          <input type='text' placeholder='Title' onChange={handleTitle}></input>
          <button className={"In"} onClick={handleInButton}>In</button>
          <input type='text' placeholder='Amount'onChange={handleAmount}></input>
          <button className={"Out"} onClick={handleOutButton}>Out</button>
        </div>
        <div className='transaction-container'>
         {
          transactions.map((val, index) =>{
           return <div className={`display-container ${val.type}`}>
              <span>{val.title}</span>
              <span>{val.amount}</span>
            </div>
          })
         }
        </div>
      </div>

      <div className='sidebar'>
        <div className='avatar'></div>
        <button>${balance}</button>

      </div>
    </div>
    
  );
}

export default App;
