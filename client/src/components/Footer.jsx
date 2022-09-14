

const Footer = () => {
    return (
        
        
        <footer className="fixed flex-col" >
            <div className="fixed w-full flex flex-row justify-around bottom-11 text-main-dark dark:text-main-light">

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
            <div className="fixed w-full bottom-9">
                <hr></hr>
            </div>
            <div className="fixed w-full flex flex-row justify-around bottom-1">
                <p>The Last Dance.inc 2022. We love our users!</p>
                <p>Follow</p>
            </div>

        </footer>
        
       
    )
}

export default Footer