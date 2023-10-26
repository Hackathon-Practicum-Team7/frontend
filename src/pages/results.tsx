import styles from "./results.module.css";
import {ReactElement} from "react";
import {TableHeader} from "../components/table-header/table-header";
import EnhancedTable from "../components/table/table";

export const ResultsPage = (): ReactElement => {

  return (
    <section className={styles.section}>
      <TableHeader />
      <EnhancedTable />
    </section>
  )
}
