data = [{"x":5,"y":5},{"x":7,"y":10},{"x":9,"y":8},{"x":11,"y":3}];

let generatorsSvg = d3.select('#generators').append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

let line = d3.line().x(function(d, i){ return d.x*5})
                    .y(function(d, i){ return d.y*5})
                    .curve(d3.curveStep);


let group = generatorsSvg.append('g').attr('transform', 'translate(100,100)')

group.append('path')
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('d', line(data));

group.selectAll('circle')
    .data(data)
    .enter().append('circle')
        .attr('cx', function(d, i){ return d.x*5})
        .attr('cy', function(d, i){ return d.y*5})
        .attr('r', 1)    