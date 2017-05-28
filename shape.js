let data = [7,14,24,34,35];

let rectSvg = d3.select('#rect').append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

let setHeight = function(d){
    return d * 2;
}

rectSvg.selectAll('rect')
    .data(data)
    .enter().append('rect')
        .attr('width', 40)
        .attr('height', function(d, i){ return setHeight(d) })
        .attr('fill','red')
        .attr('x', function(d, i){ return (i * 50) })
        .attr('y',function(d, i){ return 100 - (setHeight(d))}) //invierto la posicion de las barras

let circleSvg = d3.select('#circle').append('svg')
    .attr('width', '100%')
    .attr('height', '100%');        

circleSvg.selectAll('circle')
    .data(data)
    .enter().append('circle')
        .attr('cx', function(d, i ){ return (i * 50) + 50 })
        .attr('cy','50')
        .attr('r', function(d, i ){ return d })