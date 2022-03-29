import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { HomeWrapper } from "./style";
import { changeModalStatus, setLoading } from "@/store/actionCreators";

import { Button } from "antd";
import ValidateModal from "./c-pages/validate-modal";
import SuccessModal from "./c-pages/success-modal";

export default memo(function Home() {
  // props and state

  // reducer hooks
  const dispatch = useDispatch();

  // methods
  const btnClick = () => {
    dispatch(changeModalStatus(true));
    dispatch(setLoading(false));
  };

  return (
    <HomeWrapper>
      <div className="content">
        <div className="main-title">A better way </div>
        <div className="main-title">to enjoy every day.</div>
        <div className="sub-title">Be the first to know when we launch.</div>
        <Button
          type="primary"
          className="invite-btn"
          onClick={() => btnClick()}
        >
          Request an invite
        </Button>
      </div>
      <ValidateModal />
      <SuccessModal />
    </HomeWrapper>
  );
});
