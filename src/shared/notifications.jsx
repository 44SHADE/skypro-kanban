import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

export const SToastContainer = styled(ToastContainer).attrs({stacked: true})`
  &&&.Toastify__toast-container {
    width: 50%;
  }
`;

const Msg = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p style={{ paddingTop: "6px" }}>{data.text}</p>
    </div>
  );
};

export function notify(title, text, type = "default") {
  return toast(Msg, {
    data: {
      title: title || "Error",
      text: text || "argument 'data' not object or undefined",
    },
    position: "top-center",
    closeOnClick: true,
    pauseOnFocusLoss: true,
    closeButton: false,
    type: type,
    theme: "colored",
  });
}
