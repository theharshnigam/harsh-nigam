import React from 'react'
import Particles from 'react-particles-js'

const ParticlesAround = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 32,
              density: {
                enable: true,
                value_area: 500
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 8,
                color: "#4C43D4"
              }
            }
          }
        }}
      />
    </>
  )
}

export default ParticlesAround