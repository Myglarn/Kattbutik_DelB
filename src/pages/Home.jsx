import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRight, BoxSeam, Globe2, HeartFill } from "react-bootstrap-icons";

const HIGHLIGHTS = [
    {
        icon: Globe2,
        title: "Curated worldwide",
        body: "Breeds handpicked from every corner of the planet, vetted for temperament and shine.",
    },
    {
        icon: HeartFill,
        title: "Forever-home guarantee",
        body: "Every cat ships with a wellbeing pact and a lifetime of follow-up purrs.",
    },
    {
        icon: BoxSeam,
        title: "Discreet delivery",
        body: "Padded, ventilated boxes arrive at your door - your floof, your timeline.",
    }
]

export default function Home() {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <p className="text-uppercase fw-semibold small text-primary mb-2" style={{letterSpacing: "0.14em"}} >Boutique feline outfitters</p>
            <h1 className="display-3 fw-bold lh-1 mb-3">
              The right cat,
              <br />
              quietly delivered.
            </h1>
            <p className="lead text-body-secondary" style={{maxWidth: "46ch"}}>
              CatsCatsCats is a small studio matching thoughtful humans with
              extraordinary breeds. Browse our roster, read the dossiers, and
              bring home a companion that fits the life you actually live.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
                <Button as={Link} to="/cats" size="lg" variant="dark">
                    Browse the catalogue <ArrowRight aria-hidden="true" />
                </Button>
                <Button as={Link} to="/about" size="lg" variant="outline-dark">
                    Meet the owners
                </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <Row className="g-4">
            {HIGHLIGHTS.map(({icon: Icon, title, body}) => (
                <Col xs={12} md={4} key={title}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body className="p-4">
                            <Icon className="text-primary mb-3" size={28} aria-hidden="true"/>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{body}</Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}