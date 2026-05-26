import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { EnvelopeAt, GeoAlt, TelephoneFill } from "react-bootstrap-icons";

const CONTACT = [
  {
    icon: TelephoneFill,
    label: "Phone",
    value: "+46 123 45 67",
    href: "tel:+46123456",
  },
  {
    icon: EnvelopeAt,
    label: "Email",
    value: "info@catscatscats.com",
    href: "mailto:info@catscatscats.com",
  },
  {
    icon: GeoAlt,
    label: "Studio",
    value: "Kattgatan 125, Stockholm",
    href: null,
  },
];

export default function About() {
  return (
    <Container className="py-5">
      <Row className="g-5">
        <Col lg={6}>
          <p
            className="text-uppercase fw-semibold small text-primary mb-2"
            style={{ letterSpacing: "0.14em" }}
          >
            About the owners
          </p>
          <h1 className="display-5 fw-bold lh-1 mb-4">
            A two-person studio with a thousand-year obsession.
          </h1>
          <p className="lead text-body-secondary">
            CatsCatsCats is run out of a small office on Kattgatan in Stockholm
            by two self-confessed crazy cat ladies who spent the better part of
            their adult lives travelling the world to meet, photograph, and live
            with as many breeds as the calendar would allow.
          </p>
          <p className="text-body-secondary">
            We don&rsquo;t farm cats and we don&rsquo;t do volume. Every cat on
            the roster arrives because we&rsquo;ve met its bloodline, its
            breeder, and ideally its grandmother. If a breed isn&rsquo;t a fit
            for your home, we&rsquo;ll happily tell you so &mdash; that&rsquo;s
            the whole point.
          </p>
        </Col>
        <Col lg={6}>
          <Card className="text-bg-dark border-0 rounded-4 shadow h-100">
            <Card.Body className="p-4 p-md-5">
              <h2 className="h3 mb-2">Get in touch</h2>
              <p className="text-white-50">
                Questions about a breed, a delivery, or a cat you already
                brought home? Reach us any way you like &mdash; we answer within
                a day.
              </p>
              <ListGroup variant="flush" className="mt-4">
                {CONTACT.map(({ icon: Icon, label, value, href }) => (
                  <ListGroup.Item
                    key={label}
                    className="bg-transparent text-white border-light border-opacity-10 px-0 py-3 d-flex align-items-center gap-3"
                  >
                    <span
                      className="d-flex align-items-center justify-content-center rounded bg-light bg-opacity-10 text-primary flex-shrink-0"
                      style={{ width: 44, height: 44, fontSize: "1.25rem" }}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <span
                      className="text-uppercase small text-white-50 flex-shrink-0"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      {label}
                    </span>
                    <span className="ms-auto text-end">
                      {href ? (
                        <a className="link-light" href={href}>
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
