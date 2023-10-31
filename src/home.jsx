import dog from './img/Place Your Image Here (Double Click to Edit).png'
import Contact from './contact';
const Home = () => {
    return (
        <>
            <div className="content row ">
                <div className="col-8 text-light frst">
                    <h1 className="vetr">First I wanted to be a veterinarian</h1>
                    <p className="lor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perferendis rem voluptatum? Voluptatum  <br></br>nemo eum aspernat
                        ur nam at officia, possimus quibusdam molestiae inventore fuga quam laboriosam necessitatibus nulla commodi.</p>
                </div>
                <div className="col-4 do">
                    <img src={dog} className="dog" alt="img" />
                </div>

            </div>
            <div>
                <Contact />
            </div>
        </>
    )
}
export default Home;
