import * as d3 from "d3"
import { getEndPoint } from "../chart/utility/d3.config";

function barChart(root, data) {
    document.querySelector(`#${root}`).innerHTML = ""
    const margin = { top: 10, right: 35, bottom: 20, left: 40 }
    const width = document.querySelector(`#${root}`).clientWidth
    const height = 350

    const x = d3.scaleBand().range([0, width])
    const y = d3.scaleLinear().range([height, 0])

    const buyMostAmount = Math.max(...data.map(ele => ele.買進股數))
    const sellMostAmount = Math.max(...data.map(ele => ele.賣出股數))
    const maxValueOfY = Math.max([buyMostAmount, sellMostAmount])

    const endPoint = getEndPoint(maxValueOfY)

    x.domain(data.map(d => d.券商))
    y.domain(0, endPoint)

    const svg = d3
        .select(document.querySelector(`#${root}`))
        .append("svg")
        .attr("width", width)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
}