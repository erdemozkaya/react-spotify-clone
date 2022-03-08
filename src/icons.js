const HomeIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z" fill="currentColor"></path>
        </svg>
    )
}

const SearchIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z" fill="currentColor"></path>
        </svg>
    )
}

const CollectionIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" fill="currentColor"></path>
        </svg>
    )
}

const PlusIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"></path>
            <path fill="none" d="M0 0h16v16H0z"></path>
        </svg>
    )
}

const HeartIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
        </svg>
    )
}

const HeartFilledIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h16v16H0z"></path>
            <path fill="currentColor" d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
        </svg>
    )
}

const DownloadIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
            <path fill="currentColor" d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
        </svg>
    )
}

const DownDirIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M14 6l-6 6-6-6h12z"></path>
        </svg>
    )
}

const PrevIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
        </svg>
    )
}

const NextIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
        </svg>
    )
}

const ExternalIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
            <path fill="currentColor" d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
        </svg>
    )
}

const PlayIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
    )
}

const PauseIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
        </svg>
    )
}

const PlayerPrevIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
        </svg>
    )
}

const PlayerNextIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
        </svg>
    )
}

const ShuffleIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
            <path fill="currentColor" d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
        </svg>
    )
}

const RepeatIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
        </svg>
    )
}

const QueueIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
        </svg>
    )
}

const DeviceIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
            <path fill="currentColor" d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
    )
}

const PictureInPictureIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" fillRule="evenodd">
                <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"></path>
                <path d="M10 8h4v3h-4z"></path>
            </g>
        </svg>
    )
}

const VolumeMutedIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"></path>
        </svg>
    )
}

const VolumeLowIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M10.04 5.984l.658-.77q.548.548.858 1.278.31.73.31 1.54 0 .54-.144 1.055-.143.516-.4.957-.259.44-.624.805l-.658-.77q.825-.865.825-2.047 0-1.183-.825-2.048zM0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302z"></path>
        </svg>
    )
}

const VolumeNormalIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"></path>
        </svg>
    )
}

const VolumeFullIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
        </svg>
    )
}

const LyricsIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
        </svg>
    )
}

const ArrowLeftIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="currentColor" points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "></polygon>
        </svg>
    )
}

const Icon = ({name, size = 24}) => {
    const Icons = {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        plus: PlusIcon,
        heart: HeartIcon,
        heartFilled: HeartFilledIcon,
        download: DownloadIcon,
        prev: PrevIcon,
        next: NextIcon,
        downDir: DownDirIcon,
        external: ExternalIcon,
        play: PlayIcon,
        pause: PauseIcon,
        playerPrev: PlayerPrevIcon,
        playerNext: PlayerNextIcon,
        shuffle: ShuffleIcon,
        repeat: RepeatIcon,
        queue: QueueIcon,
        device: DeviceIcon,
        pictureInPicture: PictureInPictureIcon,
        volumeMuted: VolumeMutedIcon,
        volumeLow:VolumeLowIcon,
        volumeNormal:VolumeNormalIcon,
        volumeFull:VolumeFullIcon,
        lyrics:LyricsIcon,
        arrowLeft: ArrowLeftIcon
    }

    const Component = Icons[name];
    return <Component size={size} />
}

export {
    Icon
}