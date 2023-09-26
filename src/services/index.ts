import { TransactionInfo } from "./MoneyBucketBffClient";
import { MoneyBucketBffClient } from "./MoneyBucketBffClient";

export class MoneyBucketService {
  constructor(private client: MoneyBucketBffClient) {}

  fetchCategories = async () => await this.client.fetchCategories();
  addCategory = async (name: string) => await this.client.addCategory(name);
  fetchFinanceInstitutions = async () => await this.client.fetchFinanceInstitutions();
  addFinanceInstitution = async (name: string) => this.client.addFinanceInstitution(name);
  fetchCurrentMonthTransactions = async () => this.client.fetchCurrentMonthTransactions();
  addTransaction = async (transaction: TransactionInfo) => this.client.addTransaction(transaction);
  fetchCurrentMonthBalance = async () => this.client.fetchCurrentMonthBalance();
  fetchReport = async () => this.client.fetchReport();
}