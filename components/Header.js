import React, { useContext } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import logo from '../assets/ico_logo.png'
import logoban from '../assets/ban_logo.gif'
import Image from 'next/image'
import { IoMdSearch } from 'react-icons/io'
import { AmazonContext } from '../context/AmazonContext'
import { FaCoins } from 'react-icons/fa'
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal'
import 'react-simple-hook-modal/dist/styles.css'
import BuyModal from './BuyModal'

const Header = () => {
  const styles = {
    container: `h-full w-full flex items-center bg-[#000] text-white gap-1 px-2`,
    logo: `flex items-center cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-white rounded-full shadow-lg flex flex items-center border border-black`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `flex items-center text-md font-bold cursor-pointer`,
    coins: `ml-[10px]`,
  }

  const { balance, buyTokens, getBalance } = useContext(AmazonContext)
  const { openModal, isModalOpen, closeModal } = useModal()
  return (
    <ModalProvider>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={logoban}
            alt='hermessecund'
            height={121}
            width={800}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>New Releases</div>
          <div className={styles.menuItem}>Featured</div>
          {balance ? (
            <div
              className={(styles.balance, styles.menuItem)}
              onClick={openModal}
            >
              {balance}
              <FaCoins className={styles.coins} />
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} buyTokens={buyTokens} />
              </Modal>
            </div>
          ) : (
            <div
              className={(styles.balance, styles.menuItem)}
              onClick={openModal}
            >
              0 AC <FaCoins className={styles.coins} />
              <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
                <BuyModal close={closeModal} buyTokens={buyTokens} />
              </Modal>
            </div>
          )}
        </div>
      </div>
    </ModalProvider>
  )
}

export default Header
