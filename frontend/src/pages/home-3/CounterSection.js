import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 2382,
            countTitle: 'Our Project Compleate',
            counterPrefix: '+',
            iconClass: 'ras-counter-icon bg-purple-icon'
        },
        {
            countNum: 1100,
            countTitle: 'Experienced Members',
            counterPrefix: '+',
            iconClass: 'ras-counter-icon bg-orange-icon'
        },
        {
            countNum : 2382,
            countTitle: 'Our Satisfied Clients',
            counterPrefix: '+',
            iconClass: 'ras-counter-icon bg-sky-blue-icon'
        },
        {
            countNum : 1200,
            countTitle: 'Our Running Projects',
            counterPrefix: '+',
            iconClass: 'ras-counter-icon bg-red-icon'
        }

    ];

    return(
        <div className="ras-counter">
            {counters &&
            <div className="row">
                {counters.map( (counter, num) => (
                <div key={num} className="col-md-3">
                    <Fade bottom>
                        <div className="ras-counter-1">
                            <div className={counter.iconClass}>
                                <i className="flaticon-strategy"></i>
                            </div>
                            <div className="ras-counter-info">
                                <h3><span className="ras-counter-number">
                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                </span> <span className="ras-counter-postfix">{counter.counterPrefix}</span></h3>
                                <p className="ras-counter-label">{counter.countTitle}</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                ))}
            </div>
            }
        </div>
    )
}
export default Counter;