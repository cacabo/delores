import styled from 'styled-components';
import {
  SM,
  MD,
  LG,
  minWidth,
  maxWidth,
} from '../constants/widths';

export const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0 1rem;

  ${minWidth(SM)} {
    padding: 0 1rem;
  }

  ${minWidth(MD)} {
    padding: 0 8%;
  }

  ${minWidth(LG)} {
    padding: 0 12%;
  }

  ${({ background }) => background && (`
    background: ${background};
  `)}

  ${({ leftOnly }) => leftOnly && (`
    padding-right: 1rem !important;
  `)}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  ${maxWidth(SM)} {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div`
  flex: ${({ width }) => (width ? 'none' : 1)};
  width: ${({ width }) => width || 'auto'};

  ${({ flex }) => flex && (`
    display: flex;
  `)}
`;

export const ColSpace = styled(Col)`
  flex: none;
  width: ${({ width }) => width || '4rem'};

  ${maxWidth(SM)} {
    display: none;
  }
`;

export const RowSpace = styled(Row)`
  height: 1rem;
`;
