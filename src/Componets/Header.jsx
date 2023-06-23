import NavBar from "./NavBar";

const Header = () =>{
    return (
        <div className="container-fluid bg-dark">
            <div className="col-md-12 text-center  ">
                <h1 className="text-ligth-emphasis">IceDrink</h1>
            </div>
            <div className="row bg-dark p-3 text-end">
                <div className="col-md-6">
                    <NavBar />                    
                </div>
            </div>
            
        </div>
    )
}

export default Header;