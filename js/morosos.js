$(document).ready(function(){
        
        var dataTitle = [];
        var dataAmount = [];

        d3.csv('./data/deudores.csv')
            .row(function(d) { 
                if(typeof(d.Monto) === 'string' && dataTitle.length < 25){
                    dataTitle.push(d.Empresa);
                    dataAmount.push(parseInt(d.Monto));
                }
            })//.row(function(d) { 
            .get(function(error, data){
                var initGraph = function(){
                    
                    let svgTest = d3.select('#scales').select('svg');
                    
                    if(!svgTest.empty()){
                        svgTest.remove();
                    }                    

                    let colorScale = d3.scaleSequential(d3.interpolateCool).domain([0,dataAmount.length]);

                    let width = $(window).innerWidth() * .95;
                    let height = $(window).innerHeight() * .95;

                    let min = d3.min(dataAmount);
                    let max = d3.max(dataAmount);

                    const margin = {
                        top :20,
                        left: 250,
                        bottom: 50,
                        right: 300,
                    };

                    let scalesSvg = d3.select('#scales').append('svg')
                        .attr('width', width)
                        .attr('height', height);

                    let chartGroup = scalesSvg.append('g').attr('transform','translate('+margin.left+','+margin.top+')')

                    //-----X-------
                    let x = d3.scaleLinear().domain([max, (min * 0.1)]).range([(width - margin.right), 0]);

                    let xAxis = d3.axisBottom(x)
                                    .ticks(10)
                                    
                    chartGroup.append('g').attr('class', 'axis x')
                                            .call(xAxis)
                                            .attr('transform','translate(0, '+ (height - margin.bottom) +')');

                    //-----Y-------
                    let y = d3.scaleBand().domain(dataTitle)
                                            .range([0, height - margin.bottom]);

                    let yAxis = d3.axisLeft(y)
                                    .ticks(10)
                                    .tickPadding(5)
                                    .tickSize(5);

                    chartGroup.append('g').attr('class', 'axis Y').call(yAxis);

                    //-----Graph-------
                    let heightItem = (height / dataAmount.length);

                    chartGroup.selectAll('rect')
                        .data(dataAmount)
                        .enter().append('rect')
                            .attr('width', function(d, i){ return x(d) })
                            .attr('height', heightItem*0.8)
                            .attr('fill', function(d, i) { return colorScale(i) })
                            .attr('x', 1)
                            .attr('y',function(d, i){ 
                                
                                chartGroup.append('text').text('$ '+ d.toLocaleString())
                                    .attr('class', 'amount-text amount-text-'+i)
                                    .attr('x',5)
                                    .attr('y', y(dataTitle[i]) + (heightItem* .6))
                                    .on('mouseover', function(){ this.preventDefault() });

                                return y(dataTitle[i]) 
                            })
                            .on('mouseover', function(d, i){
                                $('.amount-text-'+i).css({
                                    'display' : 'block'
                                })
                            })
                            .on('mouseleave', function(d, i){
                                $('.amount-text-'+i).css({
                                    'display' : 'none'
                                })
                            })//chartGroup.selectAll('rect')
            }//.get(function(error, data){
            
            $(window).resize(initGraph);
            initGraph();            

        })//d3.csv('./data/deudores.csv')
})//$(document).ready




