import "./App.css";
import s1 from ".//img/Place Your Image Here (10).png";
import s2 from ".//img/Place Your Image Here (9).png";
import s3 from ".//img/Place Your Image Here (1).png";
import s4 from ".//img/Place Your Image Here (4).png";
import s5 from ".//img/Place Your Image Here (5).png";
import s6 from ".//img/Place Your Image Here (6).png";



const Service = () => {
  return (
    <>
      <div className=" row  services">
        <div className="ser-head">
          <div className="ser-h">OUR SERVICES</div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem facilis suscipit voluptates dolor quae tempora dolorum.
        </div>
        <div className="ser2">
          <div className="row ser-img">
            <div className="col-lg-4">
              <img className="s-images" src={s1} alt="img"></img>
              <div className="ser-info">
                <h2>Veterinarian</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur<br></br> adipisicing
                  elit. Fugit earum ratione numquam,
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <img className="s-images" src={s2} alt="img"></img>
              <div className="ser-info">
                <h2>Vaccination Care</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br></br>adipisicing
                  elit. Fugit earum ratione numquam,
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <img className="s-images" src={s3} alt="img"></img>
              <div className="ser-info">
                <h2>Dental Care</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br></br>adipisicing
                  elit. Fugit earum ratione numquam,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="recent">
          <div className="recent-post">
            <div className="heading">PET SALES</div>
          </div>
          <div className="heading-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, neque in atque vel accusamus nobis ab asperiores.</div>
          
          <div className="posts row ">
            <div className="card col post1">
              <img className="post-img" src={s4} alt="s4" />
              <div className="card-desc">
                <div className="desc1">FRENCH BULLDOG</div>
                <div className="desc2"></div>
                <div className="desc3">Lorem ipsum dolorg elit. Quam delectus sed facere nostrum quo nam illum ipsam sus</div>
                <div className="desc4"><button className="desc4-btn">BUY NOW</button></div>
              </div>
            </div>
            <div className="card col post1">
              <img className="post-img" src={s5} alt="s4" />
              <div className="card-desc">
                <div className="desc1">HUSKY</div>
                <div className="desc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus sed facere nostrum quo nam illum ipsam sus</div>
                <div className="desc4"><button className="desc4-btn">BUY NOW</button></div>
              </div>
            </div>
            <div className="card col post1">
              <img className="post-img" src={s6} alt="s4" />
              <div className="card-desc">
                <div className="desc1">LAB</div>
                <div className="desc2"></div>
                <div className="desc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus sed facere nostrum quo nam illum ipsam sus</div>
                <div className="desc4"><button className="desc4-btn">BUY NOW</button></div>
              </div>
            </div>
          </div>


        </div>
      </section>
     
    </>
  );
};
export default Service;
