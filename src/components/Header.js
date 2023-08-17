import Button from './Button'
const Header = ({title,onToggle,changeBtn}) => {

  
//   const onClick=()=>{
//     console.log('Clicked');
// }
  
  return (
    <header className='d-flex border justify-content-center mb-5 p-4'>
     
      <h1>{title}</h1>
  
      <Button text={!changeBtn ?'Add':'Close'}  className='btn btn-outline-success px-4 py-2 btn-sm h-50 ms-3 m-2' onClick={onToggle}/> 
    </header>
  )
}
// const bb ="btn btn-primary btn-lg ms-5";

 
Header.defaultProps ={
  title:'To do-List'
}




export default Header
