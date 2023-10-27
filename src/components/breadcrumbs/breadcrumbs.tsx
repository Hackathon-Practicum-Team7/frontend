import { Breadcrumbs, Link, Typography } from '@mui/material';

export const BreadcrumbsNav: React.FC = () => {

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        color="#1A1B22"
        href="/">
        Поиск
      </Link>
      <Link
        underline="hover"
        color="#1A1B22"
        href="/results">
        Список кандидатов
      </Link>
      <Typography color="#1A1B22">Профиль кандидата</Typography>
    </Breadcrumbs>
  )
}
