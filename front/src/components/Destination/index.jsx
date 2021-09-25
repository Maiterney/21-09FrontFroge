import React from 'react'

export const Destination = () => {
    const popularDestinations = [
        {
            title: 'Popular destinations',
            listDestinations: [
                {
                    id: 1,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'large',
                    tours: ''
                },
                {
                    id: 2,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'middle',
                    tours: '34 tours'
                },
                {
                    id: 3,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'middle',
                    tours: '34 tours'
                },
                {
                    id: 4,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'little',
                    tours: '34 tours'
                },
                {
                    id: 5,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'little',
                    tours: '34 tours'
                },
                {
                    id: 6,
                    url: "https://envato-shoebox-0.imgix.net/a6c7/3aa7-b143-4c75-bdfd-588a0ff3922a/_Z0A4696+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=1b586e76d115d811a6a190db6cee85d2",
                    destinations: 'Dubai',
                    price: '$ 356',
                    size: 'little',
                    tours: '64 tours'
                }
            ]
        }
    ]

    return (
        <section className="destination">
            <div className="container">
                {popularDestinations.map(destinations =>(
                    <div className="row" key={destinations.id}>
                        <div className="destinations_title">
                            <div className="title">
                                <h2>{destinations.title}</h2>
                            </div>
                            <div className="all_destinations">
                                <a href="#">View all</a>
                            </div>
                        </div>
                        <div className="listDestinations">
                            <ul className="cards">
                                {destinations.listDestinations.map(card =>(
                                    <li key={card.id} className={card.size}>
                                        <img src={card.url} alt="" />
                                        <div className="details">
                                            <h5>{card.destinations}</h5>
                                            <span className="price">{card.price}</span>
                                        </div>
                                        <span className="tours">
                                            {card.tours}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
