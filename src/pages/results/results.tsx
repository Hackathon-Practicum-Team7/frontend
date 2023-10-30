import styles from "./results.module.css";
import {ReactElement, useEffect, useState} from "react";
import {TableHeader} from "../../components/table-header/table-header";
import EnhancedTable from "../../components/table/table";
import { BreadcrumbsNav } from "../../components/breadcrumbs/breadcrumbs";
import {useSelector} from "../../services/hooks/use-selector";
import {createData} from "../../utils/helpers";
import {IData} from "../../utils/types";

export const ResultsPage = (): ReactElement => {
  const [ areCandidatesFound, setCandidatesFound ] = useState<boolean>(false);
  const [ isLoaded, setLoaded ] = useState<boolean>(false);
  const [ rows, setRows ] = useState<IData[]>([]);
  const students = useSelector(state => state.getStudentsState.students);

  useEffect(() => {
    if (students.length === 0) {
      setCandidatesFound(false);
    } else {
      setCandidatesFound(true);
      const initalRows = students.map((student, index) => {
        const skills = student.skills.map(skill => skill.title);
        return createData(
          index + 1,
          {
            name: `${student.name} ${student.surname}`,
            profession: student.profession,
            score: Number(student.skill_match),
            src: student.avatar,
          },
          student.grade,
          student.city,
          skills,
          {
            phone: student.contact.phone,
            email: student.contact.email
          },
          student.is_favourited,
          student.id);
      });
      setRows(initalRows);
      console.log(initalRows);
    }
    setLoaded(true);
  }, [students]);

  if (!isLoaded) return <p>Загрузка...</p>
  else
  return (
    <section className={styles.section}>
      <div className={styles.breadcrumbs}>
        <BreadcrumbsNav parentPages={[]} currentPage="Список кандидатов"  />
      </div>
      <TableHeader areCandidatesFound={areCandidatesFound} resultsNumber={students.length}/>
      <EnhancedTable areCandidatesFound={areCandidatesFound} rows={rows} setRows={setRows}/>
    </section>
  )
}
