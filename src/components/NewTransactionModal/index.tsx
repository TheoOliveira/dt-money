import Modal from "react-modal";
import { Container, TypeContainer, RadioBox } from "./styles";
import fechar from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saida.svg';
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement("#root");

export function NewTransactionmodal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType ] = useState('deposit');
  return (
    <Modal
    overlayClassName="react-modal-overlay"
    className="react-modal-content" 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}>
      <button type="button" onClick={onRequestClose}>
        <img src={fechar} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo"></input>
        <input type="number" placeholder="Valor"></input>
        <TypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
          <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
