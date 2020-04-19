function Btnclicked() {
  const [counter,setCount]=useState(0);
  return <button onClick={
      function Invokeit() {
        display.log('I am clicked!');
        setCount(counter+1);
      }
      
    }> {counter} </button>
    
}

ReactDOM.render(<Btnclicked/>,
 document.getElementById('mountNode')
);