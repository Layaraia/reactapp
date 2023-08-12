const Input = (props) => {

  const { text, setValue } = props;

  return (
  <input 
  type = "text" 
  onChange = {(e) => setValue(e.target.value)} 
  />
  )
  
}

export default Input