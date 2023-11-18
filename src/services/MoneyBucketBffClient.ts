import Axios, { AxiosInstance } from 'axios';

type MongoObject = {
  _id: string;
}

export type Category = {
  id: string;
  name: string;
}

export type FinanceInstitution = {
  id: string;
  name: string;
}

export type TransactionInfo = {
  title: string;
  type: string;
  category: string;
  date: Date | string;
  value: number | string | undefined;
  financeInstitution: string;
}

export type MonthlyBalance = {
  overralBalance: number;
  totalInput: number;
  totalOutput: number;
}

export type Report = {
  month: string;
  input: number;
  output: number;
  totalByCategory: {
    name: string;
    input: number;
    output: number;
  }[];
}

export class MoneyBucketBffClient {
  private axios!: AxiosInstance;

  constructor(readonly url: string) {
    this.setUrl(url);
  }

  setUrl = (url: string) => {
    const axios = Axios.create({
      baseURL: url,
    });
    this.axios = axios;
  };

  public async fetchCategories(): Promise<Category[]> {
    const { data } = await this.axios.get(`${this.url}/categories`);
    const categories: Category[] = data.map((category: MongoObject & Category) => ({ ...category, id: category._id }));
    return categories;
  }

  public async addCategory(name: string): Promise<void> {
    await this.axios.post(`${this.url}/categories`, { name });
  }

  public async fetchFinanceInstitutions(): Promise<FinanceInstitution[]> {
    const { data } = await this.axios.get(`${this.url}/finance-institutions`);
    const financeInstitutions: FinanceInstitution[] = data.map(
      (financeInstitution: MongoObject & FinanceInstitution) =>
      ({ ...financeInstitution, id: financeInstitution._id }));
    return financeInstitutions;
  }

  public async addFinanceInstitution(name: string): Promise<void> {
    await this.axios.post(`${this.url}/finance-institutions`, { name });
  }

  public async fetchCurrentMonthTransactions(): Promise<TransactionInfo[]> {
    const { data } = await this.axios.get(`${this.url}/transactions/current-month-transactions`);
    const transactions = data.map((transaction: MongoObject & TransactionInfo) => ({
      ...transaction,
      id: transaction._id,
      date: new Date(transaction.date)
    }));
    return transactions;
  }

  public async addTransaction(transactionInfo: TransactionInfo): Promise<void> {
    await this.axios.post(`${this.url}/transactions`, transactionInfo);
  }

  public async fetchCurrentMonthBalance(): Promise<MonthlyBalance> {
    const { data } = await this.axios.get(`${this.url}/transactions/current-month-balance`);
    return data;
  }

  public async fetchReport(): Promise<Report[]> {
    const { data } = await this.axios.get(`${this.url}/report`);
    return data;
  }
}