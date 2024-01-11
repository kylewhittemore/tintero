import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Tintero {new Date().getFullYear()}</p>
    </FooterStyles>
  )
}
