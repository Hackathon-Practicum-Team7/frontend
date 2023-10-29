import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './modal-skills.module.css';
import { SkillsFilter } from '../filters/skills-filter/skills-filter';
import ReactDOM from 'react-dom';
import { Overlay } from '../overlay/overlay';

const modalRoot = document.querySelector('#modal')!;

interface Props  {
  value: string[]
  onChange: (value: string[]) => void
  onClose: () => void
}

export const ModalSkills: React.FC<Props> = ({ value, onChange, onClose }) => {

  const modalContent = (
    <Overlay onClose={onClose}>
      <section className={styles.section}>

        <div className={styles.modal}>
          <div className={styles.titleArea}>
            <h1 className={styles.title}>Полный список</h1>
            <IconButton onClick={onClose} sx={{ width: "36px", height: "36px" }}>
              <CloseIcon sx={{ color: "#1A1B22", fontSize: "36px" }} />
            </IconButton>
          </div>

          <SkillsFilter onChange={(event) => onChange(event.target.value)} value={value} withShowAll={false}></SkillsFilter>
        </div>
      </section>
    </Overlay>
  )

  return ReactDOM.createPortal (modalContent, modalRoot);
}
