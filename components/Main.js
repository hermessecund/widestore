import React, { useContext, useEffect } from 'react'
import { AmazonContext } from '../context/AmazonContext'

import Cards from './Cards'
import Featured from './Featured'
import Header from './Header'

const Main = () => {
  const styles = {
    container: `h-full w-[90%] flex flex-col mt-[0px] pr-[0px] bg-[#000] text-white overflow-hidden`,
    recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
    recentTransactionsList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[5px] p-[5px] bg-[#ffff33] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
  }
  const { recentTransactions } = useContext(AmazonContext)

  return (
    <div className={styles.container}>
      <Header />
      <Featured />
      <Cards />
      {recentTransactions.length > 0 && (
        <h1 className={styles.recentTitle}>Recent Transaction</h1>
      )}
      {recentTransactions &&
        recentTransactions.map((transaction, index) => {
          console.log(transaction)
          return (
            <div key={index} className={styles.recentTransactionsList}>
              <div className={styles.transactionCard}>
                <p>From: {transaction.attributes.from_address}</p>
                <p>To: {transaction.attributes.to_address} </p>
                <p>
                  Hash:{' '}
                  <a
                    target={'_blank'}
                    rel='noopener noreferrer'
                    href={`https://rinkeby.etherscan.io/tx/${transaction.attributes.hash}`}
                  >
                    {transaction.attributes.hash.slice(0, 10)}
                  </a>
                </p>
                <p>Gas: {transaction.attributes.gas}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Main
