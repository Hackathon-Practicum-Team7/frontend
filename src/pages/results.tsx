import styles from "./results.module.css";
import {ReactElement} from "react";
import {TableHeader} from "../components/table-header/table-header";

export const ResultsPage = (): ReactElement => {

  return (
    <section className={styles.section}>
      <TableHeader />
    </section>
  )
}
