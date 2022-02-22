import React from 'react'
import Particles from 'react-particles-js'

const ParticlesAround = () => {
  return (
      <>
    <Particles
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:500
              }
            },
              shape:{
                type: "circle",
                stroke:{
                  width:6,
                  color: "#ff8c00"
                }
              }
          }
        }}
      />
      </>
  )
}

export default ParticlesAround