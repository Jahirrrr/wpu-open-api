/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import backgroundLandingpage from './gradiasi.jpg';
import { Col, Container, Row, Card } from 'react-bootstrap';

const HomeScreen = ({ history }) => {
  const { userInfo } = useSelector(state => state.userLogin);
  useEffect(() => {
    if (!userInfo) {
      // history.push("/login");
    }
  }, []);

  return (
    <div className="bgcolor">
      <img src={backgroundLandingpage} style={{ width: '100%', height: '100vh' }} />
      <div
        style={{
          position: 'absolute',
          top: '300px',
          left: '16px',
          color: 'white',
          fontSize: '4vw',
        }}
      >
        WPU-Open-Api :
        <br />
        Dapatkan Banyak API Gratis, Untuk Kebutuhan Belajar Ataupun Project Kamu, Terutama Untuk Komunitas WPU
        <br />
        Build With M.E.R.N Stack
        <br />
      <div className="buttons">
		        <a href={"https://github.com/ZSofttt/wpu-open-api"} className="btn btn-primary">Source Code</a>
		      </div>
      </div>
    </div>
  );
};

export default HomeScreen;
