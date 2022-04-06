import Modal from "react-modal";
import { Container, TypeContainer, RadioBox } from "./styles";
import fechar from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saida.svg';
import { useState, FormEvent, useContext } from "react";
import { api } from "../../services/api"
import { TransactionsContext } from "../../TransactionsContext";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement("#root");

export function NewTransactionmodal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext);
  const [type, setType ] = useState('deposit');
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    createTransaction({
      title,
      amount: value,
      type, 
      category
    })
  }

  return (
    <Modal
    overlayClassName="react-modal-overlay"
    className="react-modal-content" 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}>
      <button type="button" onClick={onRequestClose}>
        <img src={fechar} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}></input>
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}></input>
        <TypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
          type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
          <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TypeContainer>
        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
