import React from 'react';
import Layout from './src/components/Layout';
import WildAtlanticStyles from './src/styles/WildAtlanticStyles';
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/900.css";

export function wrapPageElement({ element, props }) {
  if (props.location.pathname.includes("wildatlanticretreat")) {
    return (
      <>
        <WildAtlanticStyles />
        {element}    
      </>
    )
  }

  return <Layout {...props}>{element}</Layout>;
}
