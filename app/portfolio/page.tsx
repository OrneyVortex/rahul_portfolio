import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'Video Conferencing Application',
    mockup: 'https://www.mirrorfly.com/blog/wp-content/uploads/2024/05/in-app-video-calling.webp',
    live: 'https://www.mirrorfly.com/blog/wp-content/uploads/2024/05/in-app-video-calling.webp',
    code: 'https://github.com/OrneyVortex/E-Commerce-Platform'
  },

  {
    title: 'E-Commerce Platform',
    mockup: 'https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg',
    live: 'https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg',
    code: 'https://github.com/OrneyVortex/React-webRTC'
  },
  {
    title: 'Car Dealership platform',
    mockup: 'https://usedcarnews.com/media/k2/items/cache/eb5c20341fb0d56f03f7eff0a4870175_XL.jpg',
    live: 'https://spyne-ai-frontend-production.up.railway.app/',
    code: 'https://github.com/OrneyVortex/spyne-ai'
  },

]

const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-start mb-10">
      {projects.map((project, index) => (
        <div key={index} className="md:w-1/2 flex flex-col items-center justify-center">
          <img src={project.mockup} />
          <h1 className="text-3xl mb-2">{project.title}</h1>
          <div className="flex gap-2">
            <Link href={project.live} target='_blank' className="btn btn-secondary">Live</Link>
            <Link href={project.code} target='_blank' className="btn btn-primary">Source</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portfolio
