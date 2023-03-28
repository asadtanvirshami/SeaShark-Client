import React from 'react'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col text-center align-middle justify-center mt-20'>
        <h1 className=' text-4xl font-bold  text-blue-700 '>Hire the professionals for your work.</h1>
        <p className='mt-4 text-2xl font-semibold'>Work must be done with perfection!</p>
      </div>
    </div>
  )
}

export default Home