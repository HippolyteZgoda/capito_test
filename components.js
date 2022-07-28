// Place any imports required by your custom components at the top of
// this file. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section. The first import from
// 'react' is required.
import React from 'react';
import { Text } from 'react-native';

export const component_test = () => (
  <p className="inline-flex flex-wrap w-56 h-14 font-black align-top">
    <span className="word-te7-hero13 flex flex-nowrap absolute w-auto opacity-0 text-sky-600">
      Best advice
    </span>
    <span className="word-te7-hero13 flex flex-nowrap absolute w-auto opacity-0 text-third">
      Crypto abundance
    </span>
    <span className="word-te7-hero13 flex flex-nowrap absolute w-auto opacity-0 text-third">
      Treasure
    </span>
    <span className="word-te7-hero13 flex flex-nowrap absolute w-auto opacity-0 text-third">
      Latest News
    </span>
  </p>
);
// Define and export your components as named exports here.
// You can reference them within a Custom Code block
// as <CustomCode.MyTextComponent />

// Uncomment below to create your first com
export const MyTextComponent = () => <Text>Hello world,,!</Text>;
