// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm'
import Transaction from '../models/Transaction'

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    // await transactions = getCustomRepository(Transaction)
  }
}

export default CreateTransactionService
