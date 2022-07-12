import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import { AmazonContext } from '../context/AmazonContext'

const Cards = () => {
  const styles = {
    container: `h-full w-full flex flex-col bg-[#000] text-white p-[0px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center flex-col bg-[#000] text-white flex-wrap gap-[20px]`,
  }
  const { assets } = useContext(AmazonContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>New Release</div>
      <div className={styles.cards}>
        <div className={styles.cards}>
          {assets.map(item => {
            let asset = item.attributes

            return <Card key={item.id} item={item.attributes} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards
