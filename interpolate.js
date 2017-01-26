const dataArray = [
  {x: 5, y: 0},
  {x: 0, y: 12},
  {x: 10, y: 13},
  {x: 5, y: 0},
  {x: 12, y: 10},
  {x: 10, y: 13}
]
const interpolateTypes = [d3.curveNatural, d3.curveStep, d3.curveCardinal, d3.curveBasis, d3.curveLinear]
const colors = ["teal", "coral", "pink", "blue", "green"]

interpolateTypes.forEach((intP, i) => {

  let svg = d3.select('div#main').append('svg')
              .attr('height', '100')
              .attr('width', '100%')

  let line = d3.line()
               .x((d) => d.x * 6)
               .y((d) => d.y * 4)
               .curve(intP)


  let chartGroup = svg.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('stroke', colors[i]);

  chartGroup.append('path')
    .attr('d', line(dataArray))
    .attr('fill', 'none')
    .attr('stroke-width', '1')
  // debugger;

  chartGroup.selectAll(`circle.grp${i}`)
      .data(dataArray)
      .enter()
      .append('circle')
        .attr('class', (d, i) => `grp${i}`)
        .attr('cx', (d) => d.x * 6)
        .attr('cy', (d) => d.y * 4)
        .attr('r', '2')

})
