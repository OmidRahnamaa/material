import React from 'react'
import { Bar } from 'react-chartjs-2'

const RedChart = () => {
    return (
        <div>
            <Bar 
                data={{
                    labels:['red','blue','purple','yellow','black'],
                    datasets: [{
                        label: '# of votes',
                        data: [12,19,3,5,2,3],
                    }]
                }}
                height={202}
                width={308}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default RedChart
