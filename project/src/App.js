import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';

function App() {

  const [mydata,setData] = useState([]);
  const apiget = () => {
    fetch("https://inshortsapi.vercel.app/news?category=cricket")
    .then((response)=>response.json())
    .then((json)=>{
      setData(json.data)
    });
  };

  useEffect(()=>{
    apiget();
    const interval = setInterval(()=>{
      apiget();
    },500000);
    return ()=> clearInterval(interval);
  },[]);

  return (
      <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {
            
          mydata.map(
            (value)=> {
              return(
                <>
                <Col className="container-fluid mt-4">
          <Card>
            <Card.Img variant="top" src={value.imageUrl} height="275px" />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>
                {value.content}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
                </>
              )
            }
          )
        }
        </Row>
      </Container>
  );
}

export default App;
