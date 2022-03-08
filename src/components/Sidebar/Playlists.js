function Playlists(){
    return (
        <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
            <ul>
                {Array.from(Array(40),(_,i) => <li key={i}>
                    <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                        22. Çalma Listem
                    </a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Playlists;