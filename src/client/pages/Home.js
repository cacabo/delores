import React from 'react';
import s from 'styled-components';

import Hero from '../fragments/hero/Hero';

const Container = s.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Subtitle = s.h2`
  margin-bottom: 1rem;
`;

export const Home = () => (
  <>
    <Hero />

    <Container className="container">
      <Subtitle>Something something</Subtitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a velit non purus hendrerit molestie ultricies cursus nisl. Mauris at elit sit amet magna placerat ultrices. Donec interdum metus justo, a aliquam ligula ultrices id. Maecenas a ligula nibh. Integer gravida ipsum in magna feugiat, et venenatis neque dictum. Vestibulum scelerisque dui vitae ante euismod, a auctor diam tincidunt. Phasellus suscipit molestie enim ac porttitor. Vivamus consectetur hendrerit dui, nec tempor eros molestie quis. {/* eslint-disable-line */}
      </p>
    </Container>
  </>
);
