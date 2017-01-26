const dataArray = [25, 27, 30, 36, 47, 30, 52, 78, 41, 27, 14, 45, 37, 83, 84, 12, 34, 3];

const firstYear = 2000;
const dataYears = dataArray.map((data, index) => firstYear + index)
const parseDate = d3.timeParse('%Y');

const
  height = 500,
  width = 500;

const y = d3.scaleLinear()
            .domain([0, 100]).range([height, 0]); // reverse!

const x = d3.scaleTime()
            .domain( d3.extent(dataYears, (d) => parseDate(d) ) )
            .range([0, width]);

const yAxis = d3.axisLeft(y).ticks(6).tickPadding(10).tickSize(10)
const xAxis = d3.axisBottom(x).ticks(6)

// debugger

const area = d3.area()
                .x((d, i) => x(parseDate(dataYears[i])))
                .y0(height)
                .y1((d) => y(d))
                .curve(d3.curveNatural);

let svg = d3.select('div#main').append('svg').attr('height', '100%').attr('width', '100%');
let chartGroup = svg.append('g').attr('transform', 'translate(50, 40)')

chartGroup.append('path').attr('d', area(dataArray)).attr('fill', 'green')

chartGroup.append('g').attr('class', 'axis y').call(yAxis)

chartGroup.append('g').attr('class', 'axis x').call(xAxis)
  .attr('transform', `translate(0, ${height})`)
