// import { Link} from "react-router-dom";
import "./App.css";
import german from ".//img/Place Your Image Here.png";
import german1 from "../src/img/german1.png";
import doc1 from "./img/Place Your Image Here (7).png";
import doc2 from ".///img/doc2.png";
import doc3 from ".////img/doc3.png";
import abt4 from ".////img/Place Your Image Here (8).png";
import abt41 from ".////img/Icon (1).png";
import abt42 from ".////img/Icon (2).png";
import abt43 from ".////img/Icon.png";
import c1 from ".//img/Place Your Image Here (9).png";
import c2 from ".//img/Place Your Image Here (11).png";
import c3 from ".//img/Place Your Image Here (10).png";


const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <section className="row justify-content-evenly mt-5  abt ">
          <div className="col-lg-4 ">
            <h1 className="abt-head">
              As a veterinarian and lover of animals.
            </h1>
            <p className="abt-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Delectus
              aliquid o Veritatis accusamus pariatur sit ex, quae totam illum{" "}
            </p>
            <div className="btn">
              <button className="text-light btn-con ">Contact Us</button>
            </div>
          </div>
          <div className="col-lg-4">
            <img src={german} className="gs" alt="img" />
          </div>
        </section>
        <section className="row abt2 mt-5 justify-content-evenly ">
          <div className="col-lg-4">
            <img src={german1} alt="img" className="ger-img"></img>
          </div>
          <div className="col-lg-4 vet">
            <h1 className="veter">As a Vet.</h1>
            <p className="abt2-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              asperiores minima aliquam! Harum recusandae itaque dicta commodi.
            </p>
            <button className="abt2-btn">Contact us</button>
          </div>
        </section>

        <section>
          <div className="abt3">
            <div className="row abt3-desc">
              <h1>The Vetcare Team</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt adipisci sit eaque pariatur voluptatem, vel dolore.
              </p>
            </div>
            <div className="row docs">
              <div className="col">
                <img src={doc1} alt="img" className="col-lg-3 doc-img"></img>
                <span className="doc-name">Dr.Jennifer Mullen</span>
              </div>
              <div className="col">
                <img src={doc2} alt="img" className="col-lg-3 doc-img"></img>
                <span className="doc-name">Dr.Sheeren Colins</span>
              </div>
              <div className="col">
                <img src={doc3} alt="img" className="col-lg-3 doc-img"></img>
                <span className="doc-name">Dr.Alex Dunphy</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="abt4">
            <div className="row abt4-desc">
              <img src={abt4} alt="img"></img>
              <div className="row abt4-cont">
                <div className="col">
                  <img className="abt4-img" src={abt41} alt="img" />
                  <div className="num">
                    <span>
                      +300 <br></br> Departments
                    </span>
                  </div>{" "}
                </div>
                <div className="col">
                  <img className="abt4-img" src={abt42} alt="img" />
                  <div className="num">
                    <span>
                      +42844<br></br>HappyClients
                    </span>
                  </div>{" "}
                </div>
                <div className="col">
                  <img className="abt4-img" src={abt43} alt="img" />
                  <div className="num">
                    <span>
                      +59332<br></br>Vaccintions{" "}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="abt5">
          <div className="row abt5-h">
            <div className="abt5-head">Recent Posts</div>
            <p className="abt5-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatibus, velit commodi corrupti dolorum magnam.
            </p>
          </div>
          <div className="abt5-cards row">
            <div className=" col">
              <img className="card-img" src={c1} alt="" />
              <div className="abt5-info">
                As a veterinarian And Lover of Animals{" "}
                <div className="date">FEB 23,2023</div>{" "}
              </div>
            </div>
            <div className=" col">
              <img className="card-img" src={c2} alt="" />
              <div className="abt5-info">
                As a veterinarian And Lover of Animals
                <div className="date">FEB 27,2023</div>
              </div>
            </div>
            <div className="card i3 col">
              <img className="card-img" src={c3} alt="" />
              <div className="abt5-info">
                As a veterinarian And Lover of Animals
                <div className="date">MAR 3,2023</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        
      </div>
    </>
  );
};
export default About;
