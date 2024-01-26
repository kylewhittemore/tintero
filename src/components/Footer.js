import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  text-align: center;
  padding-top: 30px;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Tintero {new Date().getFullYear()}</p>
    </FooterStyles>
  )
}
