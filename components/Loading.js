/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center>
      <div>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle />
      </div>
    </center>
  );
}

export default Loading;
