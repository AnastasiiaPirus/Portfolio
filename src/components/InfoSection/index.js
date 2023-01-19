import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
    Collumn2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Collumn1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    // Img,
    LineHr,
    ArrowForward,
    ArrowRight,
    
} from './InfoElements'
// import Gif from '../../images/female-web-designer-working-on-web-design.json'
import Lottie from 'react-lottie';



const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, lightTopLine, link, animation }) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Collumn1>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine} >{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <LineHr />
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to={link} onMouseEnter={onHover} onMouseLeave={onHover} primary={primary} dark={dark} smooth={true} duration={500} spy={true} exact="true" offset={-80}> {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Collumn1>
                        <Collumn2>
                            <ImgWrap>
                                {/* <Img src={img} alt={alt} /> */}
                                <Lottie options={defaultOptions}
                                    height={555}
                                    width={555}
                                    isStopped={false}
                                    isPaused={false} />
                            </ImgWrap>
                        </Collumn2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection