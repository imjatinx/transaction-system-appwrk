import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BalanceSheet = () => {
  const [balaceSheet, setBalaceSheet] = useState([])

  const fetchBalanceSheet = async () => {
    const response = await axios.get('http://127.0.0.1:5000/api/balacesheet')
    setBalaceSheet(response.data.data.transactions)
  }
  useEffect(() => {
    fetchBalanceSheet()
  }, [])

  return (
    <div>
      <table style={{ border: '1px solid black' }} border='1'>
        <thead>
          <tr>
            <th colSpan={2}>Office Transactions</th>
            <th colSpan={3}>
              <Link to={'/transaction'}>
                + Add Transaction
              </Link>
            </th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            balaceSheet && balaceSheet.map((txn, key) => {
              return (
                <tr key={key}>
                  <td>{txn.date}</td>
                  <td>{txn.description}</td>
                  <td>{txn.type === 'credit' ? txn.amount : '-'}</td>
                  <td>{txn.type === 'debit' ? txn.amount : '-'}</td>
                  <td>{txn.balance}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BalanceSheet