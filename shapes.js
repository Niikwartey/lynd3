const dataArray = [5, 11, 18, 8, 7];

let container = d3.select('div#main');
// d3 returns a d3 node thus allows chaining
let svg = container
  .append('div')
  .attr('id', 'svgWrapper')
  .append('svg')
  .attr('height', '100%')
  .attr('width', '100%');

const
  width = 50,
  barPad = 15,
  circlePad = 60,
  linePad = 20,
  heightFactor = 15,
  svgHeight = document.querySelector('#svgWrapper').offsetHeight,
  svgWidth = document.querySelector('#svgWrapper').offsetWidth;

// add bars(rectangles) and bind data to 'em
svg.selectAll('rect')
   .data(dataArray)
   .enter()
   .append('rect')
     .attr('height', (d) => d * 15 )
     .attr('width', width)
     .attr('x', (d, i) => (width + barPad) * i)
     .attr('y', (d) => svgHeight - (d * 15))
     .attr('fill', 'coral')

// add bubbles(circles) and bind data to 'em
var newX = 350;
svg.selectAll('circle.bubble')
  .data(dataArray)
  .enter()
  .append('circle')
    .attr('class', 'bubble')
    .attr('cx', (d, i) => newX += (d * 4) + (i * 20)) // x coord of circle center
    .attr('cy', 200) // y coord of circle center
    .attr('r', (d) => d * 2)  // radius of circle
    .attr('fill', 'pink')

// add ellipses(circles) and bind data to 'em
newX = 350;
svg.selectAll('ellipse.oval')
  .data(dataArray)
  .enter()
  .append('ellipse')
    .attr('class', 'oval')
    .attr('cx', (d, i) => newX += (d * 4) + (i * 20)) // x coord of ellipse center
    .attr('cy', 100) // y coord of ellipse center
    .attr('rx', (d) => d * 3) // horizontal radius of ellipse
    .attr('ry', (d) => d * 2.2) // vertical radius of ellipse
    .attr('fill', 'teal')

// add line
newX = 350;
svg.selectAll('line')
  .data(dataArray)
  .enter()
  .append('line')
    .attr('x1', newX) // *
    .attr('y1', (d, i) => 300 + (i * linePad)) // *
    .attr('x2', (d) => newX + (d * 15)) // *
    .attr('y2', (d, i) => 300 + (i * 20)) // *
    .style('stroke', 'green') // *
    .attr('stroke-width', 3) // only optional


// add text
svg.append('text')
  .text('heyyyy bud!!')
  .attr('x', 50)
  .attr('y', 100)
