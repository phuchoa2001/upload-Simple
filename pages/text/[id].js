import React, { useState } from "react";
import Styles from "../../styles/room.module.scss";
import Idroom from "../../components/layout/Idroom";
import clsx from "clsx";
function IdText({ data, id }) {
  const [text, setText] = useState(data.data);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  async function handleReset() {
    setText("");
    fetch(`/api/text/${id}`, {
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
  async function handleSave() {
    fetch(`/api/text/${id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success!");
      })
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
  const res = await fetch(`${process.env.APi_URL}/api/text/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
      id: params.id,
    },
  };
}

export default IdText;
