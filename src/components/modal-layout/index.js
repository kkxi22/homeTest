import React, { memo } from "react";

import { ModalLayoutWrapper } from "./style";

export default memo(function ModalLayout(props) {
  const { topPart, centerPart, bottomPart } = props;

  return (
    <ModalLayoutWrapper>
      <div className="top-part">
        <div className="title">{topPart}</div>
        <div className="line">———</div>
      </div>
      <div className="center-part">{centerPart}</div>
      <div className="bottom-part">{bottomPart}</div>
    </ModalLayoutWrapper>
  );
});
