/* eslint-disable no-useless-catch */
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method because if userAccount exists then login the user
        return this.login({ email, password })

      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}) {
    try {
      const userAccount = await this.account.createEmailPasswordSession(email,password);
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async getCurrnetUser() {
    try {
        return this.account.get();
    } catch (error) {
        console.log('Appwrie Service:: getCurrentUser:: error', error);
    }

    return null
  }

  async logout(){
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log('Appwrite Service:: logout:: error', error);
    }
  
  }
}

const authService = new AuthService();

export default authService;
