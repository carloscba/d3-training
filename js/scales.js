
dataTitle = ['ELECTROINGENIERIA SA','TARJETAS REGIONALES SA','FIDEICOMISO EDISUR 1','GRUPO ELING SA','CEMENTOS AVELLANEDA S.A.','GAMA  S.A.','HUAWEI TECH INVESTMENT CO LTD','ASOC. GREM. EMPL. DE COMERCIO','MASSALIN PARTICULARES SRL','PIRELLI NEUMATICOS SAIC','EDISUR S.A.'];
dataAmount = [8255187,7051751,6264031,5044982,4322514,3739615,3706458,3551534,3528470,3428048,3212456];

let colorScale = d3.scaleSequential(d3.interpolateCool).domain([0,10]);

let width = window.innerWidth * 0.9;
let height = 400;

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
let x = d3.scaleLinear().domain([max, (min * 0.1)])
                        .range([(width - margin.right), 0]);

let xAxis = d3.axisBottom(x)
                .ticks(dataAmount.length)
                /*
                .tickPadding(5)
                .tickSize(5);
                */
                
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
        .attr('y',function(d, i){console.log(dataTitle[i]); return y(dataTitle[i]) }) //y(d) aplica la escala



