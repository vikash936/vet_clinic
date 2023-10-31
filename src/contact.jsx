import insta from "./img/insta.jpg";
import "./App.css";
import Api from "./api";

const Contact = () => {
  return (
    <>
      <Api />
      <footer>
        <div class="footerLeft">
          <div class="footerMenu">
            <h1 class="fMenuTitle">About US</h1>
            <ul class="fMenuList">
              <li class="fListItem">Company</li>
              <li class="fListItem">Contact</li>
              <li class="fListItem">Careers</li>
              <li class="fListItem">Affilitates</li>
              <li class="fListItem">Store</li>
            </ul>
          </div>
          <div class="footerMenu">
            <h1 class="fMenuTitle">Useful Links</h1>
            <ul class="fMenuList">
              <li class="fListItem">Support</li>
              <li class="fListItem">Refund</li>
              <li class="fListItem">FAQ</li>
              <li class="fListItem">Feedback</li>
              <li class="fListItem">Stories</li>
            </ul>
          </div>
          <div class="footerMenu">
            <h1 class="fMenuTitle">Subscribe To Our NewsLetter</h1>
            <div class="fMail">
              <input type="text" placeholder="Mail ID" class="fInput" />
              <button class="fButton">Join !</button>
            </div>
            <div class="footerRightMenu">
              <h1 class="fMenuTitle">Follow Us</h1>
              <div class="fIcons">
                <a href="h">
                  <img src={insta} alt="" class="fIcon" />
                </a>
                <a href="n">
                  <img src={"telegram.png"} alt="" class="fIcon" />
                </a>
                <a href="f">
                  <img src={"twitter.png"} alt="" class="fIcon" />
                </a>
                <a href="h">
                  <img src={"whatsapp.png"} alt="" class="fIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
