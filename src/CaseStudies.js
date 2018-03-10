import React from 'react'

import Media from './Media'

const CaseStudies = (props) => {

  const caseStudies = props.portfolioItems
    .filter(item => item.type === 'caseStudy')
    .map(item => {
      return (
        <Media key={item.id} item={item} />
      )
    })

  return (
    <div className='case-studies row'>
      <h2>Case Studies</h2>
      {caseStudies}
    </div>
  )

}

export default CaseStudies