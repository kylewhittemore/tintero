import React from 'react';
import Layout from './src/components/Layout';
import OpeningTheChannelStyles from './src/styles/OpeningTheChannelStyles';
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/900.css";


export function wrapPageElement({ element, props }) {
  if (props.location.pathname.includes("openingthechannel")) {
    return (
      <>
        <OpeningTheChannelStyles />
        {element}    
      </>
    )
  }

  return <Layout {...props}>{element}</Layout>;
}
