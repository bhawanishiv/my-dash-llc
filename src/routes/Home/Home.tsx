import * as d3 from 'd3'

import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import Button from '../../components/Button'

export interface HomeProps {
  className?: string
}

const companies = ['Microsoft', 'IBM', 'Google', 'Apple', 'Meta', 'Amazon']
const width = 600
const height = 400

const maxSize = 25

const Home: React.FC<HomeProps> = (props) => {
  const [dimension, setDimension] = useState({ width: 900, height: 400 })

  const handleRefreshData = () => {
    const margin = { top: 40, right: 50, bottom: 40, left: 50 },
      width = dimension.width - margin.left - margin.right,
      height = dimension.height - margin.top - margin.bottom

    const x = d3.scaleBand().range([0, width]).padding(0.1)
    const y = d3.scaleLinear().range([height, 0])

    d3.select('.md-chart__container').selectChildren('svg').remove()

    const svg = d3
      .select('.md-chart__container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    const data = Array.from({ length: maxSize }, () => {
      const n = Math.floor(Math.random() * maxSize)
      const name = `Customer ${n}`
      return { name, value: n }
    })

    x.domain(data.map((d, i) => d.name))
    y.domain([0, maxSize])

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.name) || 1)
      .attr('width', x.bandwidth())
      .attr('y', function (d) {
        return y(d.value)
      })
      .attr('height', function (d) {
        return height - y(d.value)
      })

    // Add x axis
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // Add y axis
    svg.append('g').call(d3.axisLeft(y))
  }

  const renderHome = () => {
    return (
      <div>
        <div className='md-chart__header'>
          <h1 className='md-chart__header--title'> Home page</h1>
          <div>
            <Button onClick={handleRefreshData} variant='contained' color='primary'>
              Refresh
            </Button>
          </div>
        </div>
        <div className='md-chart__container'></div>
      </div>
    )
  }

  // const detectSize = () => {
  //   setDimension({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   })
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', detectSize)

  //   return () => {
  //     window.removeEventListener('resize', detectSize)
  //   }
  // }, [])

  useEffect(() => {
    handleRefreshData()
  }, [])

  return renderHome()
}

export default Home
