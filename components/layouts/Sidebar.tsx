import Modal from "react-modal";
import { UserData } from "../../api/user/interface";
import { Container, Hr, Indicative } from "../../styles/Ui/structure";
import { Albums } from "../users/Albums";
import { Posts } from "../users/Posts";
import { Update } from "../users/Update";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  userData: UserData;
  updateState: any;
}

Modal.setAppElement("#modal-root");

export const Sidebar = ({
  isOpen,
  toggleModal,
  userData,
  updateState,
}: Props) => {
  const { id } = userData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="sidebar"
      overlayClassName="overlay"
    >
      <Container>
        <Indicative onClick={toggleModal}>Return to users</Indicative>
        <Update {...{ updateState }} {...{ userData }} />
        <Hr />
        <Posts userId={id} />
        <Hr />
        <Albums userId={id} />
      </Container>
    </Modal>
  );
};
