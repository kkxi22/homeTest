import React, { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "antd";

import { changeModalStatus } from '@/store/actionCreators'
import ValidateForm from "../validate-form";

export default memo(function ValidateModal() {
  // props and state

  // redux hook
  const modalStatus = useSelector(state => state.modalStatus);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(changeModalStatus(false))
  };

  const handleCancel = () => {
    dispatch(changeModalStatus(false))
  };

  return (
    <>
      <Modal
        closable={false}
        footer={null}
        keyboard={false}
        visible={modalStatus}
        width={400}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ValidateForm />
      </Modal>
    </>
  );
});
