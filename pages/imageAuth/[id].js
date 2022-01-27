import React, { useState, useEffect } from "react";
import Styles from "../../styles/room.module.scss";
import Idroom from "../../components/layout/Idroom";
import clsx from "clsx";
import convertBase64 from "../../common/convertbase64";
import { useRouter } from "next/router";
function IdText({ data, id }) {
  const [listImage, setListImage] = useState(data.data);
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
        fetch(`/api/auth/imageAuth/${id}/confirm`, {
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
    if (e.target.files[0]) {
      const fileName = e.target.files[0].name;
      const patternFileExtension = /\.([0-9a-z]+)(?:[\?#]|$)/i;
      const fileExtension = fileName.match(patternFileExtension);
      const name = fileExtension[1].toLowerCase();
      if (name === "png" || name === "jpeg" || name === "jpg") {
        convertBase64(e.target.files[0]).then((res) => {
          const push = listImage;
          push.push(res);
          setListImage([...push]);
        });
      } else {
        alert(
          `chúng tôi chỉ hổi trợ file PNG && JPEG && JPG còn của bạn là ${fileExtension[1]}`
        );
      }
      e.target.value = "";
    }
  }
  function handleDownload() {
    listImage.map((image, index) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = `image${index}.png`;
      a.click();
    });
  }
  async function handleReset() {
    setListImage([]);
    fetch(`/api/image/${id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: [] }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async function handleSave() {
    fetch(`/api/imageAuth/${id}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: listImage }),
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
      fetch(`/api/auth/imageAuth/${id}/saveAuth`, {
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
  function handleDelete(index) {
    const push = listImage;
    push.splice(index, 1);
    setListImage([...push]);
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
              danh sách hình ảnh
            </label>
            <div className={Styles.listimage}>
              {listImage.map((item, index) => (
                <div className={Styles.image} key={index} id={index}>
                  <img src={item} alt="Image Upload" />
                  <div
                    className={Styles.toolbar}
                    onClick={() => handleDelete(index)}
                  >
                    <i
                      className={clsx("fa fa-trash", Styles.toolbar_icon)}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
            <div className={Styles.listBtn}>
              <li className={Styles.btn} onClick={handleDownload}>
                <p>Tải về tất cả</p>
              </li>
              <li className={Styles.btn}>
                <input
                  type="file"
                  id="inputFile"
                  className={Styles.file}
                  onChange={handleChange}
                />
                <label htmlFor="inputFile" className={Styles.btnlabel}>
                  Upload ảnh
                </label>
              </li>
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
  const res = await fetch(`${process.env.APi_URL}/api/imageAuth/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data: data,
      id: params.id,
    },
  };
}

export default IdText;
