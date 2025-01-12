   // src/components/DashboardPlaceholder.js

   import React from 'react';
   import { Container, Row, Col } from 'react-bootstrap';
   import 'bootstrap/dist/css/bootstrap.min.css';

   const DashboardPlaceholder = () => {
     return (
       <Container className="text-center mt-5">
         {/* Top three placeholders */}
         <Row className="mb-4">
           <Col>
             <img src="https://placehold.co/356x100" alt="Placeholder" className="img-fluid" />
           </Col>
           <Col>
             <img src="https://placehold.co/356x100" alt="Placeholder" className="img-fluid" />
           </Col>
           <Col>
             <img src="https://placehold.co/356x100" alt="Placeholder" className="img-fluid" />
           </Col>
         </Row>

         {/* Large middle placeholder */}
         <Row className="mb-4">
           <Col>
             <img src="https://placehold.co/1136x300" alt="Placeholder" className="img-fluid" />
           </Col>
         </Row>

         {/* Bottom rectangular placeholder */}
         <Row>
           <Col>
             <img src="https://placehold.co/1136x100" alt="Placeholder" className="img-fluid" />
           </Col>
         </Row>
       </Container>
     );
   };

   export default DashboardPlaceholder;