import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './modalSkills.module.css';
import { ContactButton } from '../contactButton/ContactButton';
import { SkillsFilter } from '../filters/skills-filter/skills-filter';

export const ModalSkills: React.FC = () => {

  return (
    <section className={styles.section}>

      <div className={styles.modal}>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>Полный список</h1>
          <IconButton  sx={{ width: "36px", height: "36px" }}>
            <CloseIcon sx={{ color: "#1A1B22", fontSize: "32px" }} />
          </IconButton>
        </div>

        <div className={styles.titleArea}>
          <p className={styles.subTitle}>Профессиональные навыки</p>
          <ContactButton icon={<CloseIcon/>} label={'Очистить фильтры'}></ContactButton>
        </div>


       <SkillsFilter onChange={function (event: { target: { value: string[]; }; }): void {
          throw new Error('Function not implemented.');
        } }></SkillsFilter>

        <div>
        <Button variant="outlined" endIcon={<CloseIcon />}>
        Delete
      </Button>

        </div>

      </div>
    </section>

  )
}
