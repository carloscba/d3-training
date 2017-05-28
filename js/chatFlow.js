data =  [{
        x : 100,
        y : 10,
        total: 10,
        name : 'welcome'
    },{
        x : 50,
        y : 50,
        total: 10,
        name : 'Registro'
    },{
        x : 100,
        y : 50,
        total: 10,
        name : 'Store'
    },{
        x : 150,
        y : 50,
        total: 10,
        name : 'Service'
    }];

let chatFlow = d3.select('#chatFlow').append('svg')
    .attr('width', '100%')
    .attr('height', '100%');

chatFlow.selectAll('circle')
    .data(data)
    .enter().append('circle')
        .attr('cx', function(d){ return d.x })
        .attr('cy',function(d){ return d.y })
        .attr('r', function(d){ return d.total })    