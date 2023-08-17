const Button =({text,className,onClick})=>{
  
    return(
        <button className={className} onClick={onClick}>
            {text}
        </button>

    )
}

// const btnAddStyling ="btn btn-primary btn-lg ms-5";

export default Button