import logo from './logo.svg';
import './App.css';
import {Controlledtabs} from './Tabs';
import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Pagination, Breadcrumb, Overlay, Toast} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1> hello to kaise he aap log </h1>
    </div>
  );
}


function Btngroup() {
  return (
    <>

      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup> <br />
    </>

  );
}


function Pgination() {
  return (
    <>
      <br />
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}

function Breadcrumps() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}


function Overlays() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <h3>Overlay</h3>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
      <br/>
    </>
  );
}

function Toasts(){
  return(
    <>
    <br/>
    <h3>Toast</h3>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    </>
  );
}


export default App;
export { Btngroup, Pgination, Breadcrumps, Overlays, Toasts };
