import { Card, Ratio } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import BreedImage from "./BreedImage.jsx";

export default function CatCard({ cat }) {
  return (
    <Card className="h-100 overflow-hidden shadow-sm">
      <Ratio aspectRatio="4x3" className="bg-body-tertiary">
        <BreedImage
          cat={cat}
          alt={cat.name}
          className="w-100 h-100 object-fit-cover"
        />
      </Ratio>
      <Card.Body>
        <Card.Title className="fs-5 mb-1">{cat.name}</Card.Title>
        <Card.Text
          className="text-body-secondary d-inline-flex align-items-center gap-1 mb-0">
          <GeoAlt aria-hidden="true" /> {cat.origin}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
