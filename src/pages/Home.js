//components
import HomeHeader from "../components/HomeHeader";
import NavBar from "../components/NavBar";

//images
import bg2 from "../assets/images/bg2.png"
import image1 from "../assets/images/image1.png"
const Home = () => {
    return ( 
        <div>
            <NavBar />
            <HomeHeader />

            <section style={{backgroundColor: "#e28f44"}} className="py-5">
                <div className="container">
                    <h1 className="text-center text-white">Trusted by 40,000+ small business owners</h1>
                    <div className="row text-center mt-4">
                        <h4 className="text-white col-md-3">GDSC</h4>
                        <h4 className="text-white col-md-3">Women in tech</h4>
                        <h4 className="text-white col-md-3">Men in Tech</h4>
                        <h4 className="text-white col-md-3">Confused side devs</h4>
                    </div>
                </div>
            </section>

            <section className="container mt-4 text-center">
                <h1 style={{fontWeight: "bold"}}>The smartest way to </h1>
                <h1 style={{fontWeight: "bold"}}>Sell Your Services Online</h1>
                <p className="my-4">Connect with your audience, collect qualified leads, and sell your services with Leadpages. </p>
                <img src={bg2} className="img-fluid"/>
            </section>

            <section style={{backgroundColor: "#603eff"}} className="py-5">
                <div className="container my-4">
                    <div className="row text-white">
                        <div className="col-md-4">
                            <h2 className="">Create Your Online Presence</h2>
                            <h4 className="my-4">Code-free web publishing</h4>
                            <p>Not a ‘tech person’? You don’t have to be! With our drag-and-drop builder you can create and publish professional-looking web pages in a matter of minutes.</p>
                        </div>

                        <div className="col-md-4">
                            <h2 className="">Collect Qualified Leads</h2>
                            <h4 className="my-4">Converstion-optimized everything</h4>
                            <p>Not a ‘tech person’? You don’t have to be! With our drag-and-drop builder you can create and publish professional-looking web pages in a matter of minutes.</p>
                        </div>

                        <div className="col-md-4">
                            <h2 className="">Grow Your Business</h2>
                            <h4 className="my-4">Online payments & Intergrated tools</h4>
                            <p>Not a ‘tech person’? You don’t have to be! With our drag-and-drop builder you can create and publish professional-looking web pages in a matter of minutes.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mt-4">
                <div style={{fontWeight: "bold"}} className="text-center">
                    <h1>Unlock the Tools that will</h1>
                    <h1>Turn Your Idea into Income</h1>
                </div>
                <p className="mt-4 text-center">Forget plugins, developer drama, and technical traps—Leadpages makes it easy to connect with <br /> an audience, collect leads, and close sales.</p>
            </section>

            <section className="mt-5">
                <div className="container py-4">
                    <h1 className="my-4 text-center" style={{fontWeight: "bold"}}>No high-tech skill? No problem</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={image1} className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h3 className="mb-4">Finally, digital marketing you can truly DIY</h3>
                            <p className="mb-4">
                            Intuitive tools that make it easy to create, publish, and update your content at the drop of a hat. Forget freelancers, delays, and extra expenses—we’re making it easier than you ever thought possible.
                            </p>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="my-4">Code-free publishing</h4>
                                    <p>
                                    Create and publish professional-quality, mobile-responsive pages in a matter of minutes without touching a speck of code.
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <h4 className="my-4">Ready-made template</h4>
                                    <p>
                                    Publish in minutes with professionally-designed templates and drag-and-drop customization
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{backgroundColor: "#0b236d"}} className="mt-5 text-center">
                <div className="container py-5 text-white">
                    <h1 style={{fontWeight: "bold"}}>Yeah, it's hard to build a Business <br /> But we'l lead the way.</h1>
                    <h4 className="my-5">Take Leadpages for test drive when you start your free 14-day trial. <br />No obligation. No reason not to </h4>

                    <button className="gbtn">Start a Free Trial</button>
                </div>
            </footer>
        </div>
     );
}
 
export default Home;