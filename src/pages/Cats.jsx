import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import CatCard from "../components/CatCard.jsx";
import PaginationBar from "../components/PaginationBar.jsx";
import { fetchBreeds } from "../api/catApi.js";

const PAGE_SIZE = 10;

export default function Cats() {
    const [breeds, setBreeds] = useState([]);
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        let cancelled = false;
        fetchBreeds()
        .then((data) => {
            if (cancelled) return;
            setBreeds(data);
            setStatus("ready");
        })
        .catch((err) =>{
            if (cancelled) return;
            setError(err.message || "Failed to load cats");
            setStatus("error");
        })
        return () => {cancelled = true; };
    }, []);

    const pageCount = Math.max(1, Math.ceil(breeds.length / PAGE_SIZE));
    const safePage = Math.min(currentPage, pageCount);
    const start = (safePage - 1) * PAGE_SIZE;
    const visible = breeds.slice(start, start + PAGE_SIZE);

    return (
        <Container className="py-5">
            <h1 className="mb-4">Browse our cats</h1>

            {status === "loading" && (
                <div className="text-center py-5">
                    <Spinner animation="border" role="status" aria-label="Loading cats" />
                </div>
            )}

            {status === "error" && (
                <Alert variant="danger">Could not load cats: {error}</Alert>
            )}

            {status === "ready" && (
                <>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {visible.map((cat) =>(
                            <Col key={cat.id}>
                                <CatCard cat={cat} />
                            </Col>
                        ))}
                    </Row>
                    <PaginationBar
                        currentPage={safePage}
                        pageCount={pageCount}
                        onChange={setCurrentPage}
                    />
                </>
            )}
        </Container>
    );
}