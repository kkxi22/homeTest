import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";

import { changeSucModalStatus } from "@/store/actionCreators";
import ModalLayout from "components/modal-layout";

export default memo(function SuccessModal() {
  // props and state

  // redux hook
  const sucModalStatus = useSelector((state) => state.sucModalStatus);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(changeSucModalStatus(false));
  };

  const handleCancel = () => {
    dispatch(changeSucModalStatus(false));
  };

  const onOk = () => {
    dispatch(changeSucModalStatus(false));
  };

  // jsx fragment
  const centerPart = <div>You will be one of the first to experience Broccoli &amp; Co. when we launch.</div>;

  const bottomPart = (
    <Button block onClick={onOk}>
      Ok
    </Button>
  );

  return (
    <>
      <Modal
        closable={false}
        footer={null}
        keyboard={false}
        visible={sucModalStatus}
        width={350}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalLayout
          topPart={"All done!"}
          centerPart={centerPart}
          bottomPart={bottomPart}
        />
      </Modal>
    </>
  );
});
