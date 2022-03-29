import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postFormDataAction, setLoading } from "@/store/actionCreators";

import { Form, Input, Button } from "antd";
import ModalLayout from "components/modal-layout";

const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

export default memo(function ValidateForm() {
  // reducer hooks
  const { loading, modalStatus, errMessage } = useSelector((state) => ({
    loading: state.loading,
    modalStatus: state.modalStatus,
    errMessage: state.errMessage,
  }));
  const dispatch = useDispatch();

  // other hooks
  const [form] = Form.useForm();

  useEffect(() => {
    if (!modalStatus) {
      form.resetFields();
    }
  }, [form, modalStatus]);

  // methods
  const onCheck = async () => {
    try {
      // 1.form validate
      const values = await form.validateFields();

      // 2. set loading
      dispatch(setLoading(true));

      // 3.form submit
      dispatch(postFormDataAction(values));
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  // jsx fragment
  const centerPart = (
    <Form {...formItemLayout} form={form} name="register" scrollToFirstError>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["email"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your email!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two email that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input placeholder="confirm email" />
      </Form.Item>
    </Form>
  );

  const bottomPart = (
    <>
      <Button block onClick={onCheck}>
        Send
      </Button>
      {errMessage && <div style={{ margin: "10px 0" }}>{errMessage}</div>}
    </>
  );

  const loadBtn = (
    <Button block disabled>
      Sending! please wait...
    </Button>
  );

  return (
    <div>
      <ModalLayout
        topPart={"Request an invite"}
        centerPart={centerPart}
        bottomPart={loading ? loadBtn : bottomPart}
      />
    </div>
  );
});
