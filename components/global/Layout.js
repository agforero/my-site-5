import { Container } from "react-bootstrap";
import BackgroundImage from "./BackgroundImage";
import GlobalHeader from "./GlobalHeader";

export default function Layout({ children }) {
    return (
        <div style={{backgroundColor: "var(--purple-1)"}}>
            <Container className="fixed-bottom background-position d-flex flex-column align-items-end mb-5 pb-5">
                <BackgroundImage/>
            </Container>
            <div className="foreground-position">
                <GlobalHeader/>
                {children}
            </div>
        </div>
    )
}