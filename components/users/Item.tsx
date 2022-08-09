import { useState } from "react";
import { UserData } from "./../../api/user/interface";
import { Card } from "./../../styles/Ui/cards";
import { Sidebar } from "./../layouts/Sidebar";

interface Props {
  userData: UserData;
  updateState: any;
}

export const Item = ({ userData, updateState }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { avatar, email, first_name, last_name } = userData;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card onClick={toggleModal}>
        <img src={avatar} alt={`${first_name}-${last_name}`} />
        <div>
          <div>Email: {email}</div>
          <div>User: {`${first_name} ${last_name}`}</div>
        </div>
      </Card>
      <Sidebar
        {...{ isOpen }}
        {...{ toggleModal }}
        {...{ userData }}
        {...{ updateState }}
      />
    </>
  );
};
