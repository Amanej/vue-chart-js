# Base Chart


```js
    const BarGraphData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }]
    }
    <BaseChart 
        :labels="BarGraphData.labels" 
        :datasets="BarGraphData.datasets" 
        name="bar_graph"
    />
    
    <h3>Line chart</h3>

    <BaseChart 
        :labels="BarGraphData.labels" 
        :datasets="BarGraphData.datasets" 
        name="line_graph" 
        chartType="line"
    />

    <h3>Radar chart</h3>
    
    <BaseChart 
        :labels="BarGraphData.labels" 
        :datasets="BarGraphData.datasets" 
        name="radar_graph" 
        chartType="radar"
    />
    
    <h3>Polar chart</h3>
    <BaseChart 
        :labels="BarGraphData.labels" 
        :datasets="BarGraphData.datasets" 
        name="polar_graph" 
        chartType="polarArea"
    />
```

```js
    const BubbleGraphData = {
        name: 'bubble_1',
        type: 'bubble',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [{x: 2, y: 3, r: 12}, {x: 1, y: 2, r: 8}, {x: 5, y: 4, r: 8}, {x: 6, y: 3, r: 4}],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }],
        },
    };
    <h3>Bubble chart</h3>
    <BaseChart 
        :labels="BubbleGraphData.data.labels" 
        :datasets="BubbleGraphData.data.datasets" 
        :name="BubbleGraphData.name" 
        :chartType="BubbleGraphData.type"
    />
```

```js
    const ScatterGraphData = {
        name: 'scatter_1',
        type: 'scatter',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: '# of Votes',
                data: [
                {x: -10, y: 0 },
                {x: 0, y: 10 },
                {x: 10, y: 5 },
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }],
        },
    }
    <h3>Scatter chart</h3>
    <BaseChart 
        :labels="ScatterGraphData.data.labels" 
        :datasets="ScatterGraphData.data.datasets" 
        :name="ScatterGraphData.name" 
        :chartType="ScatterGraphData.type"
    />
```