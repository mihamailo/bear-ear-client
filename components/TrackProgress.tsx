import React from 'react'
import useFormat from '../hooks/useFormat'

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void;
    isTime: boolean;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
    left, right, onChange, isTime
}) => {

    const leftFormatted = useFormat(left)
    const rightFormatted = useFormat(right)

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                {isTime ? leftFormatted : left}
            </div>
            <input
                type="range"
                min={0} max={right} value={left} onChange={onChange}
            />
            <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                {isTime ? rightFormatted : right}
            </div>
        </div>
    )
}

export default TrackProgress