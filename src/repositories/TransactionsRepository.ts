import { EntityRepository, Repository } from 'typeorm'

import Transaction from '../models/Transaction'

interface Balance {
  income: number
  outcome: number
  total: number
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find()

    const income = transactions.reduce(
      (accumulator, transaction) =>
        transaction.type === 'income'
          ? accumulator + Number(transaction.value)
          : accumulator,
      0,
    )

    const outcome = transactions.reduce(
      (accumulator, transaction) =>
        transaction.type === 'outcome'
          ? accumulator + Number(transaction.value)
          : accumulator,
      0,
    )

    const total = income - outcome

    const balance: Balance = {
      income,
      outcome,
      total,
    }

    return balance
  }
}

export default TransactionsRepository
