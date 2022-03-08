import { Menu } from '@headlessui/react'
import { Icon } from 'icons';

function Auth() {

    const user = {
        name: "Erdem ÖZKAYA",
        avatar: "https://i.scdn.co/image/ab67616100005174dfbabf5f1338d03c97799cd3"
    };

    return (
        <Menu as="div" className={'relative'}>
            {(param) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${param.open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full p-0.5 mr-2" />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={param.open && 'rotate-180'}>
                            <Icon size={16} name="downDir" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={'absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2'}>
                        <Menu.Item>
                        {({ active }) => (
                            <a className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                            href="#">
                                Account
                                <Icon name="external" />
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                            href="#">
                                Profile
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                            href="#">
                                Log out
                            </a>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth;