import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import students from '../students_mft';


function Students() {
  return (
    <Container className='mt-5 mb-5' >
    <Row xs={1} md={4} className="g-5">
      {students.map(student => (
        <Col key={student.id}>
          <Card>
            <Card.Img variant="top" src={student.imgURL} width={200} height={200}/>
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text>
               {student.email}
               {student.phone}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      ))}
    </Row>
    </Container>
  );
}

export default Students;