import { FC, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { vacation_data as data } from "../../../data/vacation_data";
import Table from "./Table/Table";
const VacationsHistory: FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="p-[30px] bg-bg-secondary rounded-xl text-white ">
      <div className="flex gap-[9px] items-center text-2xl justify-between">
        <h2 className="leading-[32px]">История отпусков</h2>
        <button className="text-text-tetriary text-sm" onClick={openModal}>
          Посмотреть все
        </button>
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          showCloseIcon={false}
          classNames={{
            modal: "customModal",
          }}
        >
          <div className="p-[30px] bg-bg-secondary rounded-xl text-white">
            <div className="flex justify-between items-center text-2xl">
              <h2 className="leading-[32px]">История отпусков</h2>
              <button onClick={closeModal} className="p-2">
                <FaXmark />
              </button>
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
        </Modal>
      </div>
      <div className="mt-4">
        <Table data={data} />
      </div>
    </div>
  );
};

export default VacationsHistory;
