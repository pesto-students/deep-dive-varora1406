import React, { useState } from 'react'

import 'flow/dist/index.css';
import { Flow } from 'flow';

const App = () => {
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState('up');

  return <>
    <div style={{ display: 'flex', margin: '2rem' }}>
      <div style={{ flex: 1 }}>
        <button onClick={() => { setDirection('up'); setAnimate(true); }}> Slide Up </button>
        <button onClick={() => { setDirection('down'); setAnimate(true); }}> Slide down </button>

        <Flow.Slide flow={animate} direction={direction} onComplete={() => { setAnimate(false); }}>
          <div style={{ height: '250px', width: '50%', backgroundColor: 'yellow' }}>
          </div>
        </Flow.Slide>
      </div>
    </div>
  </>
}

// Slide examples

// -- #Example 1
{/*
  <Flow.SlideUp (optional)time={0.5} >
    // content children
  </Flow.SlideUp> 
*/}

// -- #Example 2
{/*
  
  <Flow.SlideDown (optional) time={0.5} (optional) flow={false}>
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
