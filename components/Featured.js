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
    card1: `h-[40px] w-[40px] p-[10px] rounded-10x1 bg-gradient-to-l from-[#ffff33] to-[#33ffff] relative cursor-pointer transition-all duration-300  hover:scale-200 hover:shadow-xl border-1 border-[#33ffff]`,
    card2: `h-[40px] w-[40px] p-[20px] rounded-5xl bg-gradient-to-l from-[#ff33ff] to-[#ffff33] relative cursor-pointer transition-all duration-300 hover:scale-200 hover:shadow-xl border-1 border-[#33ffff]`,
    card3: `h-[40px] w-[40px] p-[20px] rounded-20xl bg-gradient-to-l from-[#ffff33] to-[#3f3f3f] relative cursor-pointer transition-all duration-300 hover:scale-200 hover:shadow-xl border-1 border-[#33ffff]`,
    card4: `h-[40px] w-[40px] p-[20px] rounded-l bg-gradient-to-l from-[#33ffff] to-[#33ff33] relative cursor-pointer transition-all duration-300 hover:scale-200 hover:shadow-xl border-1 border-[#33ffff]`,
    cardCross: `h-[180px] w-[125px] rounded-l absolute bottom-[10px] left-[10px] transition-all duration-300 hover:scale-120 flex  overflow-hidden`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Top Assets</div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='../assets/tcards/1_True.gif#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='../assets/tcards/2_Twatch.gif#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='../assets/tcards/3_Secund.gif#t=0.001' />
            </video>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='../assets/tcards/4_Day.gif.gif#t=0.001' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
