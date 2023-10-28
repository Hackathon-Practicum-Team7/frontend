import styles from "./results.module.css";
import {ReactElement} from "react";
import {TableHeader} from "../../components/table-header/table-header";
import EnhancedTable from "../../components/table/table";
import { BreadcrumbsNav } from "../../components/breadcrumbs/breadcrumbs";

export const ResultsPage = (): ReactElement => {

  return (
    <section className={styles.section}>
      <div className={styles.breadcrumbs}>
        <BreadcrumbsNav parentPages={[]} currentPage="Список кандидатов"  />
      </div>
      <TableHeader />
      <EnhancedTable />
    </section>
  )
}
