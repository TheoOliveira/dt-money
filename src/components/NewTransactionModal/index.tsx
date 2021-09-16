import Modal from "react-modal";
import { Container } from "./styles";
import fechar from '../../assets/fechar.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
Modal.setAppElement("#root");

export function NewTransactionmodal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
