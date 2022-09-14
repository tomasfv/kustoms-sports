
const Button = ({ type }) => {
    return (
        <button className={`${type === 'registrarse' ?
            'rounded-md bg-gradient-to-tr from-verde-light to-botvioleta-light dark:from-verde-dark dark:to-botvioleta-dark w-32 py-3 text-main-light dark:text-main-dark' :
            'border rounded-md w-32 py-3 text-verde-light dark:text-verde-dark'}`} >
            {type === 'registrarse' ? 'Registrarse' : 'Ingresar'}
        </button>
    )
}

export default Button