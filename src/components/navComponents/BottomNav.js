import NavLogo from "./NavLogo";
import MobileMenu from "./MobileMenu";
import NavContent from "./NavContent";

const BottomNav = () => {
    return (
        <div id="bottom-nav">
            <NavLogo title="Alderwood Digging Crew" />
            <MobileMenu />
            <NavContent />
        </div >
    )
}

export default BottomNav