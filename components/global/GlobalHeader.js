import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function GlobalHeader() {
    return (
        <Container className="mt-5 pt-5 mb-3 pb-3">
            <Row className="gx-4">
                <Col className="col-auto"><Link href="/">Home</Link></Col>
                <Col className="col-auto"><Link href="#">About</Link></Col>
                <Col className="col-auto"><Link href="#">Contact</Link></Col>
                <Col className="col-auto"><Link href="#">Resume</Link></Col>
            </Row>
        </Container>
    )
}