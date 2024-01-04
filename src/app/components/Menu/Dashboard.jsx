import React from 'react'
import Header from '../Header'
import BalanceStatistic from '../Balance/BalanceStatistic'
import Card from '../Card'
import ListItem from '../ListItem'
import Chat from '../Chat'
import Transaction from '../Transaction'
import Analytics from '../Analytic'

const Dashboard = () => {
  return (
    <div>
      <Header name={"Hello, Jhon .D"} />
      <div className='mt-4 md:flex gap-5'>
        <BalanceStatistic />
        <Card/>
      </div>
      <div className='mt-4 md:flex gap-1'>
        <ListItem />
        <Chat/>
      </div>
      <div className='mt-4 md:flex gap-3'>
        <Transaction />
        <Analytics/>
      </div>
    </div>
  )
}

export default Dashboard