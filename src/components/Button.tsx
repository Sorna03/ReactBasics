interface Props{
    children:string;
    color:string;
    onClick: () =>void;
}
const Button = ({children,onClick,color}:Props) => {
  return (
    <div className={'btn btn-' +color} onClick={onClick}>{children}
    </div>

  )
}

export default Button