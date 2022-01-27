import React, { useEffect, useState } from "react";
import Styles from "../../styles/room.module.scss";
import Idroom from "../../components/layout/Idroom";
import { useRouter } from "next/router";
import clsx from "clsx";
function IdText({ data, id }) {
  const [text, setText] = useState(data.data);
  const [message, setMesssage] = useState("hãy nhập mật khẩu");
  const router = useRouter();
  let secondBetweenTwoDate = null;
  if (data.timeAuth) {
    secondBetweenTwoDate = Math.abs(
      (new Date().getTime() - new Date(data.timeAuth).getTime()) / 1000
    );
  }
  function Auth() {
    if (data.auth) {
      const messageAuth = window.prompt(message);
      if (messageAuth) {
        fetch(`/api/auth/textAuth/${id}/confirm`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload: messageAuth }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (!data.message) {
              router.push("/");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        router.push("/");
      }
    }
  }
  useEffect(() => {
    if (secondBetweenTwoDate < 1800) {
      Auth();
    }
  }, []);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  async function handleReset() {
    setText("");
    fetch(`/api/textAuth/${id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: "" }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("lưu thành công !");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function handleSavePasswrod() {
    const message = window.prompt("Nhập mất khẩu !");
    if (message) {
      fetch(`/api/auth/textAuth/${id}/saveAuth`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload: message }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Mất khẩu sẽ được cập nhật lại sau 30 phút ");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  async function handleSave() {
    fetch(`/api/textAuth/${id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: text }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className={clsx(Styles.main)}>
      <div className="row gx-0">
        <Idroom id={id} gopage={data.gopage} />
        <div
          className={clsx(
            Styles.document,
            "col xxl-9 xl-9 lg-8 md-12 sm-12 col-12"
          )}
        >
          <div className={Styles.form}>
            <label htmlFor="ControlTextarea1" className={Styles.label}>
              văn bản lưu phòng này
            </label>
            <textarea
              className={Styles.control}
              id="ControlTextarea1"
              rows="10"
              value={text}
              onChange={handleChange}
            ></textarea>
            <div className={Styles.listBtn}>
              <li className={Styles.btn} onClick={handleReset}>
                <p>Làm lại</p>
              </li>
              <li className={Styles.btn} onClick={handleSavePasswrod}>
                <p>Nhập mất khẩu phòng</p>
              </li>
              <li className={Styles.btn} onClick={handleSave}>
                <p>Lưu</p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.APi_URL}/api/textAuth/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
      id: params.id,
    },
  };
}
export default IdText;
