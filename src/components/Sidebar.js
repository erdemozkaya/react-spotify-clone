import { Icon } from 'icons';
import Logo from 'img/logo.svg';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DownloadApp from './Sidebar/DownloadApp';
import Menu from './Sidebar/Menu';
import Playlists from './Sidebar/Playlists';
import SidebarCover from './Sidebar/SidebarCover';

function Sidebar(){

    const sidebar = useSelector(state => state.player.sidebar)

    return (
        <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
            <NavLink to="/" className='mb-7 px-6'>
            <img src={Logo} alt="" className='h-10' />
            </NavLink>
            <Menu />
            <nav className='mt-6'>
                <ul>
                    <li>
                        <a href='#' className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black'>
                                <Icon name={'plus'} size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href='#' className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
                            <span className='w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-[#450af5] to-blue-100 rounded-sm text-white opacity-60 group-hover:opacity-100'>
                                <Icon name={'heartFilled'} size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>
            <Playlists />
            <DownloadApp />
            {sidebar && <SidebarCover />}
        </aside>
    )
}

export default Sidebar;