import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from "axios";
import { base_url } from "./config/index.ts";
const queryClient = new QueryClient()
export const axiosClient = axios.create({baseURL:base_url})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  </React.StrictMode>
);
