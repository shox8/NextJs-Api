import axios from "axios";
import { NextResponse } from "next/server";

class R {
  url: string;
  constructor(baseURL: string) {
    this.url = baseURL;
  }
  getUsers() {
    return axios.get(this.url + "/users").then(({ data }) => data);
  }
}

const api = new R("https://jsonplaceholder.typicode.com");

export async function GET() {
  return api.getUsers().then((data) => {
    return NextResponse.json(data);
  });
}
