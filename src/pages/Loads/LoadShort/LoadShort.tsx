import styles from "./LoadShort.module.css";
import InfoRow from "../../../components/common/InfoRow/InfoRow";
import Line from "../../../components/common/Line/Line";
import { Link } from "react-router-dom";
import { ONE_LOAD } from "../../../utils/routes";
import Button from "../../../components/common/Button/Button";
import eyeSvg from "../../../assets/svgs/eye.svg";
import editSvg from "../../../assets/svgs/edit.svg";

const LoadShort = ({ itemData }) => {
  return !itemData ? (
    <div>ff</div>
  ) : (
    <div className={styles.wrapper}>
      <InfoRow caption="name" info={itemData.name} />
      <InfoRow caption="status" info={itemData.status} />

      <InfoRow
        caption="Date created"
        info={new Date(itemData.created_date).toLocaleString()}
      />
      <Link to={`${ONE_LOAD}/${itemData._id}`}>
        <Button text="see more" type="button" svgPath={eyeSvg} />
      </Link>
      <Button text="edit" type="button" svgPath={editSvg} />

      <Line />
    </div>
  );
};

export default LoadShort;
