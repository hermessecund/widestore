import React, { useState, useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'

const Featured = () => {
  const [cardColor] = useState([
    'bg-gradient-to-r from-[#9e7351] to-[#6b504e]',
    'bg-gradient-to-r from-[#0d141c] to-[#42667e]',
    'bg-gradient-to-r from-[#424b52] to-[#908d94]',
  ])

  const styles = {
    container: `h-[400px] w-full flex bg-[#000] text-white p-[0px] flex-col`,
    title: `text-2xl font-bolder mb-[20px] mt-[10px] mb-24 ml-[10px]`,
    cards: `h-full w-full flex gap-[100px] justify-between mb-[10px] ml-[10px]`,
    card1: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-l from-[#0d141c] to-[#42667e] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#fb9701]`,
    card2: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-l from-[#0d141c] to-[#42667e] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#fb9701]`,
    card3: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-l from-[#0d141c] to-[#42667e] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#fb9701]`,
    card4: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-l from-[#0d141c] to-[#42667e] relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#fb9701]`,
    cardCross: `h-[180px] w-[125px] rounded-3xl absolute bottom-[20px] left-[20px] transition-all duration-300 hover:scale-105 flex  overflow-hidden`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Top Assets</div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/3565db33a856b19f48396062e59e6d62.mp4#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://lh3.googleusercontent.com/iDySn3M8iR_b9Y8XlCfahHsxbO9G4SpjZAPNaltT8Xqf1SmlLSNXOPw7dcGVa_1gZtZQYtjq4u1h5t9qClKiUYPj_yVH0SoxqYGs=w600#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/894fd3d49c7c258d202a22bb710a3416.mp4#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://openseauserdata.com/files/022c0aad904ddbd8884b12468aaaad28.mp4#t=0.001' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
