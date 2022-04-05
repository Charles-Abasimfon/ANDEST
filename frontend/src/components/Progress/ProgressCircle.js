import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

const ProgressBarCircle = ({ progress, strokeColor, trackStrokeColor, Icon, iconClass }) => (
    <div className="ras-progress-pie">
        <ProgressBar
            radius={100}
            progress={progress}
            rotate={-90}
            strokeWidth={2}
            strokeColor={strokeColor}
            strokeLinecap="square"
            trackStrokeWidth={2}
            trackStrokeColor={trackStrokeColor}
            trackStrokeLinecap="square"
            pointerRadius={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
        >
            <div className="ras-progress-content">
                <div className={iconClass ? iconClass : 'ras-progress-icon purple-bg-icon'}>
                    <i className={Icon ? Icon : 'flaticon-vector'}></i>
                </div>
                <h3 className="ras-progress-pie-number"><span>{progress}%</span></h3>
            </div>
        </ProgressBar>
    </div>
)

export default ProgressBarCircle;