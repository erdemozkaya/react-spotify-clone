import { Icon } from "icons";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";

function SidebarCover() {
    const dispatch = useDispatch();
    const current = useSelector(state => state.player.current)

    return (
        <div className="pt-[100%] bg-black relative group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt="" />
            <button 
                onClick={() => dispatch(setSidebar(false))}
                className="w-6 h-6 -rotate-90 opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 bg-black flex items-center justify-center">
                <Icon size={16} name="arrowLeft" />
            </button>
        </div>
    )
}

export default SidebarCover;