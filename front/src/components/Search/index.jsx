import { Calendar, Mark, Navigation } from "../../svg/svg";

const Search = (props) => {
    return(
        <section className="searchFilter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <div className="searchInputs">
                                <Mark width="18px" fill="#fff"/>
                                <input type="text" placeholder="Where To?" />
                            </div>
                            <div className="searchInputs">
                                <Calendar width="18px" fill="#fff"/>
                                <input type="date" placeholder="Month" />
                            </div>
                            <div className="searchInputs">
                                <Navigation width="18px" fillPath="#fff" fill="transparent"/>
                                <input type="text" placeholder="Travel Type" />
                            </div>
                            <div className="submit">
                                <input className="btn btn-first" type="submit" value="Find Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Search;