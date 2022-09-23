import React from 'react'




const Card = ({results}) => {

    console.log(results)
  return (
    <section className='card'>
        {
            results?.map((item, index) => (
            <div className='details' key={index}>
                <h2> {item?.id} </h2>
                <p> {item?.title} </p>
                <p> {item?.body} </p>
            </div>
            ) )
        }
       
    </section>
  )
}

export default Card