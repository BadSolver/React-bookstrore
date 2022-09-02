import axios from "axios";
import { INewBooksApi } from "../../types/newBooksApi";

enum BookEndpoint {
  NEW = "new",
  SEARCH = "search/",
  BOOKS = "books/",
}

export class BookStoreAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKSTORE_API;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew(): Promise<any> {
    const { data } = await this.API.get<INewBooksApi[]>(BookEndpoint.NEW);
    return data;
  }

  public async getDetails(isbn: string | undefined): Promise<any> {
    const { data } = await this.API.get(`${BookEndpoint.BOOKS}/${isbn}`);
    return data;
  }
}

export const bookStoreAPI = new BookStoreAPI();
