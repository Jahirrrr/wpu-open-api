/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */



import React, { useEffect } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ApiTable from '../component/ApiTable';

function MemberApiTable ({ zahirganteng }) {
return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h3 style={{ color: 'black' }}>All Api</h3>
        </Col>
        <Col className="text-right">
        </Col>
      </Row>
      <ApiTable />
    </Container>
    
  )
 }

export default MemberApiTable;
