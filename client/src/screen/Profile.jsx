/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */



import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { userInfo } = useSelector(state => state.userLogin);
  const memberId = userInfo && userInfo._id;
  
  return (
    <Container className="my-3">
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <p>USER PROFILE</p>
        <Row>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Nama :</strong> {userInfo.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email :</strong> {userInfo.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Kategori :</strong> {userInfo.category}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
