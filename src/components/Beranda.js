import '../style/Beranda.css';
import rect from '../img/Beranda/rectangle.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Beranda () {
    return (
        <div className=' beranda'>
        <Container className='kontener'>
         <Row className='baris'>
            <Col className='kolom1'><img src={rect}/></Col>
            <Col className='kolom2'>
                <h1>
                Selamat Datang<br/>
                <span className='span kecil'> 
                di website portofolioku cuy
                </span>
                </h1>
            </Col>
         </Row>
        </Container>
        </div>
    )
} 
export default Beranda