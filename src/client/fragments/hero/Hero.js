import React from 'react';
import s from 'styled-components';

import { Btn } from '../../components';
import { LIGHT_GRAY, BLUE } from '../../constants/colors';
import { APP_PATH } from '../../routes';

const Col = s.div`
  padding-top: 12%;
  padding-bottom: 12%;
`;

const FirstCol = s(Col)`
  background: ${LIGHT_GRAY};
`;

const SecondCol = s(Col)`
  background: ${BLUE};
`;

const HeroText = s.h1`
  margin-bottom: 1.5rem;
`;

export default () => (
  <div className="container-fluid">
    <div className="row">
      <FirstCol className="col-12 col-md-6">
        <div className="container">
          <HeroText>Help when you need it</HeroText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi a velit non purus hendrerit molestie ultricies cursus nisl.
          </p>

          <Btn to={APP_PATH}>
            Get Started
          </Btn>
        </div>
      </FirstCol>
      <SecondCol className="col-12 col-md-6" />
    </div>
  </div>
);
