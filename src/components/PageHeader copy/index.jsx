import React from 'react';
import { Row, Col } from 'reactstrap';
import { PageHeaderWrap } from './style';

const PageHeader = ({ heading, image, children }) => {
  return (
    <PageHeaderWrap>
      <Row>
        <Col md="6">
          <h2>{heading}</h2>
          {children}
        </Col>
        <Col md="2"></Col>
        <Col md="4">{image}</Col>
      </Row>
    </PageHeaderWrap>
  );
};

export default PageHeader;
