import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title : "freelance 1",
          type: "deposit",
          category: "income",
          amount: 1000,
          createdAt: new Date('2022-03-01')
        },
        {
          id: 2,
          title : "plano de saude",
          type: "withdraw",
          category: "bills",
          amount: 500,
          createdAt: new Date('2022-03-05')
        }
      ],
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('/transactions', (schema)=>{
      return this.schema.all('transactions');
    })

  this.post('/transactions', (schema, request) => {
    const data = JSON.parse(request.requestBody)

    return schema.create('transactions', data);
  })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
