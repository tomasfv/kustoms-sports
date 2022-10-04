const Button = ({ type }) => {
  return (
    <button
      className={`${
        type === 'registrarse'
          ? 'rounded-md bg-gradient-to-tr  font-bold from-verde-light to-botvioleta-light hover:bg-gradient-to-br hover:from-botvioleta-light hover:to-botvioleta-dark  dark:from-verde-dark dark:to-botvioleta-dark hover:dark:from-botvioleta-dark hover:dark:to-botvioleta-light text-main-light dark:text-main-dark hover:text-main-light w-28 xl:w-32 py-3 transition-colors duration-500'
          : 'border rounded-md w-28 xl:w-32 py-3 font-bold text-verde-light dark:text-verde-dark hover:text-main-light hover:bg-verde-light hover:dark:text-main-dark hover:dark:bg-verde-dark transition-colors duration-500'
      }`}
    >
      {type === 'registrarse' ? 'Registrarse' : 'Ingresar'}
    </button>
  )
}

export default Button
