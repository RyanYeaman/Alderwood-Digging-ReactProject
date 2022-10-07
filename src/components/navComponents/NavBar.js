import BottomNav from "./BottomNav";
import TopNavBar from "./TopNavBar";

const NavBar = () => {
  return (
    <nav id="nav">
      <div className="nav-container">
        <TopNavBar />
        <BottomNav />
      </div>
    </nav>
  )
}

export default NavBar 