import React, {useEffect, useState } from 'react';

export default function Loading() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                // Reset progress to 0 when it reaches 100
                if (prevProgress === 100) {
                    return 0;
                } else {
                    return prevProgress + 4; // Increment by 4 each second
                }
            });
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    
    return <div className="progress" role="progressbar">
        <div className="progress-bar" style={{ width: progress + "%" }}></div>
    </div>

}