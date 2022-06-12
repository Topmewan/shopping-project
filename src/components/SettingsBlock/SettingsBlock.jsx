import { IButton, Typography } from "./../../ui-kit";
import styles from "./SettingsBlock.module.scss";

const SettingsBlock = ({ title, isActive, onClick, variant, children }) => {
  return (
    <div className={styles.settings}>
      <div className={styles.top}>
        <Typography>{title}</Typography>
        {variant === "change" && (
          <IButton onClick={() => onClick(isActive)} variant="more">
            {isActive ? "Отменить" : "Изменить"}
          </IButton>
        )}
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default SettingsBlock;
