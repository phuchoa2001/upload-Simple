import Styles from "../../styles/idroom.module.scss";
import clsx from "clsx";
function Idroom({ id, gopage }) {
  return (
    <div
      className={clsx(Styles.idroom, "col xxl-3 xl-3 lg-4 md-12 sm-12 col-12")}
    >
      <div className={Styles.animation}>
        <div>
          <h3 className={Styles.text}>{id}</h3>
          <p className={Styles.gopage}>
            <i
              className={clsx("fa fa-user-o", Styles.icon)}
              aria-hidden="true"
            ></i>
            <span className={Styles.span}>{gopage} đã vào phòng này</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Idroom;
