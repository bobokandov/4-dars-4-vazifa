import stars from "./stars.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <header>
        <div className="ong">
          <p className="logoo">Start Bootstrap</p>
          <ol>
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Shop</ul>
          </ol>
        </div>
        <div className="chap">
          <button className="btn btn-outline-dark cartButton">
            Cart <p className="raqam rounded-pil">0</p>
          </button>
        </div>
      </header>
      <div className="section">
        <h1>Shop in style</h1>
        <h4>With this shop hompeage template</h4>
      </div>

      <div className="allCards">
        <div className="tepasi">
          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Fancy Product</h5>
                <p class="card-text text-center">$40.00 - $80.00</p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  View options
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Special Item</h5>
                <img src={stars} alt="" />
                <p class="card-text text-center mt-1">
                  <del>$20.00</del> $18.00
                </p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  Add to card
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Sale Item</h5>
                <p class="card-text text-center mt-1">
                  <del>$50.00</del> $25.00
                </p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  Add to card
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Popular Item</h5>
                <img src={stars} alt="" />
                <p class="card-text text-center mt-1">$40.00</p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block  mt-5">
                  Add to card
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="tepasi">
          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Fancy Product</h5>
                <p class="card-text text-center">$40.00 - $80.00</p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  View options
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Special Item</h5>
                <img src={stars} alt="" />
                <p class="card-text text-center mt-1">
                  <del>$20.00</del> $18.00
                </p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  Add to card
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Sale Item</h5>
                <p class="card-text text-center mt-1">
                  <del>$50.00</del> $25.00
                </p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block ">
                  Add to card
                </a>
              </span>
            </div>
          </div>

          <div class="card cards">
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body text-center d-flex flex-column justify-content-between">
              <span>
                <h5 class="card-title text-center fw-bold">Popular Item</h5>
                <img src={stars} alt="" />
                <p class="card-text text-center mt-1">$40.00</p>
              </span>
              <span>
                <a href="#" class="btn btn-outline-dark d-inline-block  mt-5">
                  Add to card
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
