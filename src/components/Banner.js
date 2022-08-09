import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from '../assets/img/header-img.png';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [eraseTitle, setEraseTitle] = useState(false);
    const titleRotate = ["Web Designer", "Fullstack Developer", "Learner", "Adventurer"];
    const [type, setType] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const period = 400;

    useEffect(()=> {
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return ()=>{
            clearInterval(ticker);
        }
    }, [type])

    const tick = () => {
        let i = loopNum % titleRotate.length;
        let fullText = titleRotate[i];
        let updatedText = eraseTitle ? fullText.substring(0, type.length - 1) : fullText.substring(0, type.length+1);

        setType(updatedText);

        if(eraseTitle){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!eraseTitle && updatedText === fullText){
            setEraseTitle(true);
            setDelta(period);
        }
        else if(eraseTitle && updatedText===''){
            setEraseTitle(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio!
                        </span>
                        <div>
                        <h1>{`My name is Anthony Rodriguez: \n `}
                        <span>{type}</span>
                        </h1>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="container mt-2">
                        <img src={bannerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}