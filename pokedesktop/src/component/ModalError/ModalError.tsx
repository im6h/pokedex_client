import { notification } from "antd";
const ModalError = () => {
  notification.error({
    message: "Error",
    description: "Please check your network and reconnect",
  });
};
export default ModalError;
