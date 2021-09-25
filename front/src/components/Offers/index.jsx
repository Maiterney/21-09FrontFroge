import Image from 'next/image'

const Offers = () => {

    const offers = [
        {
            id: 1,
            title: 'Special Offers',
            dadosOffers: [
                {
                    id:"1",
                    destination:'Venice, France',
                    src:'data:image/jpeg;base64,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',
                    alt:'Venice, France',
                    price:'$547'
                },
                {
                    id: 2,
                    destination: 'New York, USA',
                    alt: 'New York, USA',
                    src: 'https://madisongraph.com/wp-content/uploads/2020/12/The-Worlds-Best-Cities-in-2021-New-York-City-Ranks-number-2.jpg',
                    price:'$547'
                },
                {
                    id: 3,
                    destination: 'Venice, France',
                    alt: 'Venice, France',
                    src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
                    price:'$547'
                },
                {
                    id: 4,
                    destination: 'Venice, France',
                    alt: 'Venice, France',
                    src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
                    price:'$547'
                },
                {
                    id: 5,
                    destination: 'Venice, France',
                    alt: 'Venice, France',
                    src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
                    price:'$547'
                }
            ]
        }
    ]
  /*   const  dadosOffers = [
        {
            id:"1",
            destination:'Venice, France',
            src:'data:image/jpeg;base64,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',
            alt:'Venice, France',
            price:'$547'
        },
        {
            id: 2,
            destination: 'New York, USA',
            alt: 'New York, USA',
            src: 'https://madisongraph.com/wp-content/uploads/2020/12/The-Worlds-Best-Cities-in-2021-New-York-City-Ranks-number-2.jpg',
            price:'$547'
        },
        {
            id: 3,
            destination: 'Venice, France',
            alt: 'Venice, France',
            src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
            price:'$547'
        },
        {
            id: 4,
            destination: 'Venice, France',
            alt: 'Venice, France',
            src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
            price:'$547'
        },
        {
            id: 5,
            destination: 'Venice, France',
            alt: 'Venice, France',
            src: 'https://conteudo.imguol.com.br/c/entretenimento/61/2020/12/28/veneza-canais-sao-atracao-na-cidade-1609176505901_v2_450x337.jpg',
            price:'$547'
        }
    ] */
    return (
        <section className="offers">
            {offers.map(offers => (
                <div className="container" key={offers.id}>
                    <div className="row">
                        <div className="offers_header">
                            <div className="title">
                                <h2>{offers.title}</h2>
                            </div>
                            <div className="all_offers">
                                <a href="#">View all</a>
                            </div>
                        </div>
                        <ul className="listOffers">
                            {offers.dadosOffers.map(cards => (
                                <li key={cards.id} className="card_offers">
                                    <div className="card_header">
                                        <img src={cards.src} alt={cards.alt} />
                                    </div>
                                    <div className="card_content">
                                        <h5 className="title_destination">
                                            {cards.destination}
                                        </h5>
                                        <span className="price">{cards.price}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )
}

Offers.getInitialProps = async() => {
    /* const response = await axios.get('http://localhost:8000/offers');
    return{ dados : response} */
}

export default Offers;