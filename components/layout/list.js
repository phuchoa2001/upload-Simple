import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Styles from "../../styles/list.module.scss";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import vi from "timeago.js/lib/lang/vi";
timeago.register("vi", vi);
function List({ list, nameRoom, noteRoom, href }) {
  return (
    <div className={Styles.main}>
      <div className={Styles.boxtitle}>
        <h3 className={Styles.title}>{nameRoom}</h3>
        <p className={Styles.description}>{noteRoom}</p>
      </div>
      <div className={clsx(Styles.listroom, "row gx-0")}>
        {list.map((item, index) => (
          <div
            key={index}
            className={clsx(Styles.room, "col xxl-2 xl-2 lg-3 md-3 sm-6 col-6")}
          >
            <Link href={`/${href}/${index + 1}`}>
              <a className={Styles.href}>
                <div className={Styles.width}>
                  <div className={Styles.idroom}>
                    <h3 className={Styles.text}>{index + 1}</h3>
                  </div>
                  <div className={Styles.content}>
                    <div className={Styles.info}>
                      <div className={Styles.content_box}>
                        <p className={Styles.mode}>
                          Chế độ :{" "}
                          {item.auth &&
                          Math.abs(
                            (new Date().getTime() -
                              new Date(item.timeAuth).getTime()) /
                              1000
                          ) < 1800
                            ? "phòng này đã khóa"
                            : item.mode}
                        </p>
                        <p className={Styles.join}>
                          Tham Gia :{" "}
                          {item.time === "start" ? (
                            item.time
                          ) : (
                            <TimeAgo datetime={item.time} locale="vi" />
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
