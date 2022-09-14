

const Footer = () => {
    return (
        
        
        <footer className="flex flex-col bg-gris-light dark:bg-gris-dark min-h-[30.5rem]" >
            <div className=" w-full flex flex-row justify-around text-main-dark dark:text-main-light">

                <img src="" alt="logo-small" />
                <div className="flex flex-col">
                    <div className="font-bold">Community</div>
                    <p>Henry Blog</p>
                    <p>The Portal</p>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">Company</div>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>History</p>
                </div>
                    <div className="flex flex-col">
                    <button>Registrarse</button>
                    <button>Ingresar</button>
                </div>
            </div>
            <div className="w-full">
                <hr></hr>
            </div>
            <div className="w-full flex flex-row justify-around">
                <p>The Last Dance.inc 2022. We love our users!</p>
                <p>Follow</p>
            </div>

        </footer>
        
       
    )
}

export default Footer