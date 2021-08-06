import { Navbar, Container, Image } from "react-bootstrap";


export default function Header() {
    return (
        <Navbar  bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Image
                    className='mr-5'
                    src="/hospital.png"
                    width="60"
                    height="60"
                    roundedCircle/>
                    Pharma inc
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Image
                        className='justify-content-end'
                        src="/doctor.svg"
                        width="60"
                        height="60"
                        roundedCircle
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}