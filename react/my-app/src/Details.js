import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';



export default function Companyinfo({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Companyinfo
            </Button>

            <Offcanvas show={show} onHide={handleClose}
                {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


function Termsandscondition() {
    return (
      <>
        {['bottom'].map((placement, idx) => (
          <Companyinfo key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }

export { Companyinfo, Termsandscondition};