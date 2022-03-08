import Section from "components/Section";

function Home(){

    const items = [
        {
            id: 1,
            title: 'Dünyanın En Güzel Kızı',
            description: 'Mavi Gri',
            artist: "Kerem Abi",
            image: 'https://i.scdn.co/image/ab67616d00001e029cd78cc4b6b0ec335493ad87',
            type: 'album',
            src: "https://freesound.org/data/previews/623/623058_1648170-lq.mp3"
        },
        {
            id: 2,
            title: 'Maksimum Konsantrasyon',
            description: 'Mükemmel piyano melodileri ile verimli dakikalar.',
            artist: "Erdem Abi",
            image: 'https://i.scdn.co/image/ab67706f00000002d8e55d32c635c4a634ef689d',
            type: 'album',
            src: "https://freesound.org/data/previews/623/623046_9497060-lq.mp3"
        },
        {
            id: 3,
            title: 'Dünyanın En Güzel Kızı',
            description: 'Mavi Gri',
            artist: "Burcu Abla",
            image: 'https://i.scdn.co/image/ab67616d00001e029cd78cc4b6b0ec335493ad87',
            type: 'artist',
            src: "https://freesound.org/data/previews/623/623038_907124-lq.mp3"
        },
        {
            id: 4,
            title: 'Maksimum Konsantrasyon',
            description: 'Mükemmel piyano melodileri ile verimli dakikalar.',
            artist: "Enes Abi",
            image: 'https://i.scdn.co/image/ab67706f00000002d8e55d32c635c4a634ef689d',
            type: 'artist',
            src: "https://freesound.org/data/previews/623/623034_9034501-lq.mp3"
        },
        {
            id: 5,
            title: 'Dünyanın En Güzel Kızı',
            description: 'Mavi Gri',
            artist: "Erdem Abi",
            image: 'https://i.scdn.co/image/ab67616d00001e029cd78cc4b6b0ec335493ad87',
            type: 'podcast',
            src: "https://freesound.org/data/previews/623/623002_10152894-lq.mp3"
        },
        {
            id: 6,
            title: 'Maksimum Konsantrasyon',
            description: 'Mükemmel piyano melodileri ile verimli dakikalar.',
            artist: "Enes Abi",
            image: 'https://i.scdn.co/image/ab67706f00000002d8e55d32c635c4a634ef689d',
            type: 'podcast',
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        }
    ];

    return (
        <div className="grid gap-y-8">
            <Section 
                title="Recently played"
                more='/'
                items={items} />
            <Section 
                title="Popular new releases"
                more='/'
                items={items} />
            <Section 
                title="Trending now"
                more='/'
                items={items} />
        </div>
    )
}

export default Home;