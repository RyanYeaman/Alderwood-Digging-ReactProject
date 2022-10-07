
const MobileMenu = () => {
  function activateMenu() {
    document.querySelector("#mobile-menu").classList.toggle("is-active");
    document.querySelector(".nav-items").classList.toggle("nav-items-active");
  }
  
  return (
    <div className="nav-toggler" id="mobile-menu" onClick={activateMenu}>
        <span className="bars"></span>
        <span className="bars"></span>
        <span className="bars"></span> 
    </div>
  )
}

export default MobileMenu