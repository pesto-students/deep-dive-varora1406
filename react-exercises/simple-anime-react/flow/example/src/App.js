import React, { useState } from 'react'

import 'flow/dist/index.css';
import { Flow } from 'flow';

const App = () => {
  const [animate, setAnimate] = useState(false);

  return <>
    <button onClick={() => setAnimate(true)}> Start animation </button>
    <Flow.SlideUp flow={animate}>
      <div style={{ height: '350px', width: '50%', backgroundColor: 'yellow' }}>
      </div>
    </Flow.SlideUp>
  </>
}

// Slide examples

// -- #Example 1
{/*
  <Flow.SlideUp (optional)time='0.5' >
    // content children
  </Flow.SlideUp> 
*/}

// -- #Example 2
{/*
  <Flow.SlideDown (optional)time='0.5'>
    // content children
  </Flow.SlideDown>
*/}

// -- #Example 3
{/*
  <Flow.Slide direction='up | down'>
    // content children
  </Flow.Slide>
*/}

// -- (Discarded Idea for now) #Example 4
{/*
  <Flow.SlideUp flow=true>
    <Flow.SlideDown flow=false>
      // content children
    </Flow.SlideDown>
  </Flow.Slide>
*/}

export default App
