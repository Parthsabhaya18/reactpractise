import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '20rem', height:'20rem' }}>
      <Card.Img variant="top" src="https://live-sgacms.ws.asu.edu/sites/default/files/2024-09/asset-v1_AP%2BGSPTC01%2B2023%2Btype%40asset%2Bblock%40GSP_Banner_collage_-1.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>

  );
}

export default BasicExample;