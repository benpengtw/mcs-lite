import React from 'react';
import Transition from 'react-motion-ui-pack';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import imgOpenBackgroundX60 from '../../statics/images/img_open_sourceX60.png';
import imgOpenBackground from '../../statics/images/img_open_source.svg';
import SVGCloud from '../../components/SVG/SVGCloud';
import SVGOpenCode1 from '../../components/SVG/SVGOpenCode1';
import SVGOpenCode2 from '../../components/SVG/SVGOpenCode2';
import SVGOpenCode3 from '../../components/SVG/SVGOpenCode3';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import { ScrollParallaxCode } from './styled-components';

const ImageOpenSource = () =>
  <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0.5 }}>
    <ImageLayerWrapper key="ImageLayerWrapper">
      <BackgroundImage
        src={imgOpenBackground}
        placeholder={imgOpenBackgroundX60}
      />
      <div>
        <ScrollParallaxCode
          animation={{
            x: -40,
            y: 35,
            rotate: -15,
            playScale: [0, 0.5],
          }}
          style={{ transform: 'translate(-30px, 30px) rotate(0deg)' }}
          component={SVGOpenCode1}
        />
      </div>
      <div>
        <ScrollParallaxCode
          animation={{ x: 40, y: 35, rotate: 15, playScale: [0, 0.5] }}
          style={{ transform: 'translate(30px, 30px) rotate(0deg)' }}
          component={SVGOpenCode3}
        />
      </div>
      <div>
        <ScrollParallaxCode
          animation={{ y: 20, playScale: [0, 0.5] }}
          style={{ transform: 'translateY(25px)' }}
          component={SVGOpenCode2}
        />
      </div>
      <div>
        <ScrollParallax
          animation={{ y: 20, playScale: [0, 0.5] }}
          style={{ transform: 'translateY(0px)' }}
          component={SVGCloud}
        />
      </div>
    </ImageLayerWrapper>
  </Transition>;

export default pure(ImageOpenSource);
