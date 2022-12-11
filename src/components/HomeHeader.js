import headerBgImage from '../assets/images/bg1.jpg'
const HomeHeader = () => {
    return ( 
        <div className="py-4 home_herro_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 home_herro_section--text">
                        <h1 className='bold'>Easy Landing pages.</h1>
                        <h1>More Leads. Less Work</h1>

                        <p className='mt-3'>
                        Simplify your lead generation. Easily build websites and landing pages, connect your favorite marketing tools, and track your results.
                        </p>

                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <button className='btn btn-primary mb-4 mb-md-0'>Start a Free Trial</button>
                            <button className='btn btn-outline-primary'>Watch a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomeHeader;