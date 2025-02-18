import React, { useState, useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'

const Featured = () => {
  const [cardColor] = useState([
    'bg-gradient-to-r from-[#9e7351] to-[#6b504e]',
    'bg-gradient-to-r from-[#0d141c] to-[#42667e]',
    'bg-gradient-to-r from-[#424b52] to-[#908d94]',
  ])

  const styles = {
    container: `h-[400px] w-[90%] flex p-[1px] flex-col`,
    title: `text-2xl font-bolder mb-[20px] mt-[30px] mb-24 ml-[40px]`,
    cards: `h-full w-full flex gap-[100px] justify-between mb-[30px] ml-[30px]`,
    card1: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card2: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card3: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card4: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card5: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card6: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card7: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card8: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card9: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card10: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card11: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    card12: `h-[130px] w-[400px] p-[10px] rounded-3xl bg-gradient-to-l from-[#000000] to-[#000000] relative cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-[#ffff99]`,
    cardCross: `h-[180px] w-[125px] rounded-3xl absolute bottom-[20px] left-[20px] transition-all duration-300 hover:scale-105 flex  overflow-hidden`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Top Assets</div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='' />
            </video>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='' />
            </video>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='' />
            </video>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
