import { useEffect } from "react"
import { Container } from "./styles"

export function Table() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(res=>{
      res.json()
    })
    .then(data => console.log(data));
  
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>4/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw">R$1.000</td>
            <td>Casa</td>
            <td>4/08/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}