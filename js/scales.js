
dataTitle = ['ELECTROINGENIERIA SA','TARJETAS REGIONALES SA','FIDEICOMISO EDISUR 1','GRUPO ELING SA','CEMENTOS AVELLANEDA S.A.','GAMA  S.A.','HUAWEI TECH INVESTMENT CO LTD','ASOC. GREM. EMPL. DE COMERCIO','MASSALIN PARTICULARES SRL','PIRELLI NEUMATICOS SAIC','EDISUR S.A.'];
dataAmount = [8255187,7051751,6264031,5044982,4322514,3739615,3706458,3551534,3528470,3428048,3212456];

let width = window.innerWidth;
let height = 300;

let min = d3.min(dataAmount);
let max = d3.max(dataAmount);

const margin = {
    top :10,
    left: 80,
    bottom: 50,
    right: 0,
};

let scalesSvg = d3.select('#scales').append('svg')
    .attr('width', width)
    .attr('height', height);

let chartGroup = scalesSvg.append('g').attr('transform','translate('+margin.left+','+margin.top+')')

//-----Y-------
let y = d3.scaleLinear().domain([min, max])
                        .range([height, 0]);

let yAxis = d3.axisLeft(y)
                .ticks(10)
                .tickPadding(5)
                .tickSize(5);
                
chartGroup.append('g').attr('class', 'axis y').call(yAxis)

//-----X-------
let x = d3.scalePoint().domain(dataTitle)
                        .range([0, width]);

let xAxis = d3.axisTop(x)
                .ticks(10)
                .tickPadding(5)
                .tickSize(5);

chartGroup.append('g').attr('class', 'axis X').call(xAxis);

//-----Graph-------
let widthItem = (width / dataAmount.length);

chartGroup.selectAll('rect')
    .data(dataAmount)
    .enter().append('rect')
        .attr('width', widthItem - 5)
        .attr('height', function(d, i){ return d })
        .attr('fill','green')
        .attr('x', function(d, i){ return ((i) * widthItem) })
        .attr('y',function(d, i){ return y(d) }) //y(d) aplica la escala


