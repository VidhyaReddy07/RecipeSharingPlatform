import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import bannerImg from '../pages/ban.jpg'; 
import parotaImg from '../pages/parota.jpg';
import dosaImg from '../pages/dosa.jpg';
import biryaniImg from '../pages/biryani.jpg';
import idliImg from '../pages/idli.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <img src={bannerImg} className="img-fluid w-100 banner-img" alt="banner" />
      
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2 card-container">
        <div className="col">
          <Link to="/recipe/parota" className="card-link">
            <div className="card hover-card">
              <img src={parotaImg} className="card-img-top" alt="Parota" />
              <div className="card-body">
                <h5 className="card-title">Parota</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/recipe/dosa" className="card-link">
            <div className="card hover-card">
              <img src={dosaImg} className="card-img-top" alt="Dosa" />
              <div className="card-body">
                <h5 className="card-title">Dosa</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/recipe/biryani" className="card-link">
            <div className="card hover-card">
              <img src={biryaniImg} className="card-img-top" alt="Biryani" />
              <div className="card-body">
                <h5 className="card-title">Biryani</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <Link to="/recipe/idli" className="card-link">
            <div className="card hover-card">
              <img src={idliImg} className="card-img-top" alt="Idli" />
              <div className="card-body">
                <h5 className="card-title">Idli</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
