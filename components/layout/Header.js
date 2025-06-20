import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <motion.div
          className={styles.header__title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          milkbar
        </motion.div>
      </div>
    </div>
  );
}
