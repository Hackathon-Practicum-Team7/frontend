import styles from "./results.module.css";
import {ReactElement, useState} from "react";
import {TableHeader} from "../../components/table-header/table-header";
import EnhancedTable from "../../components/table/table";
import { BreadcrumbsNav } from "../../components/breadcrumbs/breadcrumbs";

export const ResultsPage = (): ReactElement => {
  const [ areCandidatesFound, _setCandidatesFound ] = useState<boolean>(true);

  return (
    <section className={styles.section}>
      <div className={styles.breadcrumbs}>
        <BreadcrumbsNav parentPages={[]} currentPage="Список кандидатов"  />
      </div>
      <TableHeader areCandidatesFound={areCandidatesFound} />
      <EnhancedTable areCandidatesFound={areCandidatesFound}/>
    </section>
  )
}
