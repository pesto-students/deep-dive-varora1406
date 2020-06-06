import React, { useState } from 'react'

import 'flow/dist/index.css';
import { Flow } from 'flow';

const App = () => {
  const [animate, setAnimate] = useState(false);

  return <>
    <button onClick={() => setAnimate(true)}> Start animation </button>
    <Flow.SlideUp time="2.5" flow={animate}>
      <div style={{ height: '350px', width: '50%', backgroundColor: 'yellow' }}>
      </div>
    </Flow.SlideUp>
  </>
}

// Slide up example
{/* <Flow.Slide>
  <Flow.Slide.Up time='0.5' auto-reverse={true}>
    // content children
  </Flow.Slide.Up>
</Flow.Slide> */}

export default App
