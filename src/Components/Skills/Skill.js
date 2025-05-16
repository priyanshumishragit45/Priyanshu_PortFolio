import React from 'react'
const Skill = ({data}) => {
  return (
      <div className='skillBar'>
                        <img src={data.Image} alt='UIDesign' className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>{data.Title}</h2>
                            <p>{data.Des}</p> 
                        </div>
                      
                    </div>
  )
}

export default Skill