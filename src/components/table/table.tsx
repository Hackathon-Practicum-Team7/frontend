import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import Avatar from '@mui/material/Avatar';
import styles from './table.module.css';
import {Chip, Pagination, ThemeProvider} from "@mui/material";
import emailIcon from '../../images/email-icon-gray.svg';
import telegramIcon from '../../images/telegram-icon-gray.svg';
import checkboxIcon from '../../images/checkbox.svg';
import inactiveCheckboxIcon from '../../images/checkbox-not-active.svg';
import {themeInput} from "../../utils/constants/style-constants";
import {CustomButton} from "../custom-button/custom-button";
import {SelectInput} from "../select-input/select-input";
import {tableOptions} from "../../utils/constants/constants";

interface IProfile {
  name: string;
  profession: string;
  src: string;
}

interface IContacts {
  tg: string;
  email: string;
}

interface IData {
  id: number;
  profile: IProfile;
  grade: string;
  location: string;
  skills: string[];
  contacts: IContacts;
  isLiked: boolean;
}

function createData(
  id: number,
  profile: IProfile,
  grade: string,
  location: string,
  skills: string[],
  contacts: IContacts,
  isLiked: boolean,
): IData {
  return {
    id,
    profile,
    grade,
    location,
    skills,
    contacts,
    isLiked,
  };
}

const rows = [
  createData(1, {
      name: 'Мария Иванова',
      profession: 'Python-разработчик',
      src: 'https://imageup.ru/img106/4591822/dsc03760-2-1-1.jpg'},
    'Junior',
    'Москва',
    ['HTML', 'CSS', 'JavaScript'],
    {
      tg: '@nickname',
      email: 'email@email.ru',
    },
     true ),
  createData(2, {
    name: 'Анастасия Иванова',
    profession: 'C++-разработчик ',
    src: 'https://imageup.ru/img37/4591831/_ssl-mzpqr8.jpg'},
    'Middle',
    'Санкт-Петербург',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(3, {
      name: 'Екатерина Иванова',
      profession: 'Python-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Казань',
    ['HTML', 'CSS', 'React'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, true),
  createData(4, {
      name: 'Полина Иванова',
      profession: 'Java-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Саратов',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(5, {
      name: 'Дарья Иванова',
      profession: 'Web-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Санкт-Петербург',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, false),
  createData(6, {
      name: 'Ирина Иванова',
      profession: 'Web-разработчик ',
      src: 'https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'},
    'Middle',
    'Москва',
    ['HTML', 'CSS'], {
      tg: '@nickname',
      email: 'email@email.ru',
    }, true),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

type Comparator = (a: IData, b: IData) => number;
function getComparator<Key extends keyof IData>(
  order: Order,
  orderBy: Key,
): Comparator {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof IData;
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'profile',
    label: 'Профиль',
  },
  {
    id: 'grade',
    label: 'Уровень',
  },
  {
    id: 'location',
    label: 'Локация',
  },
  {
    id: 'skills',
    label: 'Ключевые навыки',
  },
  {
    id: 'contacts',
    label: 'Контакты',
  },
  {
    id: 'isLiked',
    label: '',
  },
];

const newHeadCells = headCells.slice(1);

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const CheckboxIcon = <img src={checkboxIcon} alt={'Чекбокс'} className={styles.checkbox} />;
const InactiveCheckBoxIcon = <img src={inactiveCheckboxIcon} alt={'Чекбокс'} className={styles.checkbox}/>;
const InactiveLikeIcon = () => (<button className={styles.like_inactive}/>);
const ActiveLikeIcon = () => ( <button className={styles.like_active}/>);

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof IData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          key={headCells[0].id}
          align={'center'}
          padding={'normal'}
          sortDirection={orderBy === headCells[0].id ? order : false}
          width='72px'
          >
          {headCells[0].label}
        </TableCell>
        <TableCell padding="none" align={'center'} width='44px'>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            checkedIcon={CheckboxIcon}
            icon={InactiveCheckBoxIcon}
            indeterminateIcon={InactiveCheckBoxIcon}
            sx={{ width: '20px', height: '20px' }}
          />
        </TableCell>
        {newHeadCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IData>('grade');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof IData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      rows.slice().sort(getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );


  return (
    <ThemeProvider theme={themeInput}>
      <div className={styles.table__top}>
        <SelectInput filterOptions={tableOptions.sorting} width={300}/>
        <SelectInput filterOptions={tableOptions.pagination} width={220}/>
      </div>
    <Box sx={{ width: '100%', minHeight: 400 }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              '& .MuiTableCell-sizeMedium': {
                padding: '12px 24px',
              },
              '& .MuiTableCell-head': {
                paddingBottom: '16px',
              },
            }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <div style={{height: '24px'}}></div>
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer', minHeight: '68px', maxHeight: '84px' }}
                  >
                    <TableCell
                      align={'center'}
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      width='72px'
                      >
                        {row.id}
                      </TableCell>

                    <TableCell padding="none" width='44px' align={'center'}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        checkedIcon={CheckboxIcon}
                        icon={InactiveCheckBoxIcon}
                      />
                    </TableCell>

                    <TableCell align="left" width='282px'>
                      <div className={styles.profile}>
                        <div className={styles.profile__avatar}>
                          <Avatar src={row.profile.src} alt={row.profile.name} sx={{ width: '36px', height: '36px'}}></Avatar>
                        </div>
                        <div>
                          <p className={styles.profile__profession}>{row.profile.profession}</p>
                          <p className={styles.profile__name}>{row.profile.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" width='136px'>{row.grade}</TableCell>
                    <TableCell align="left" width='192px'>{row.location}</TableCell>
                    <TableCell align="left" width='328px'>
                      <div className={styles.chips}>
                        {row.skills.map(skill => {
                          return (
                            <Chip
                              key={skill}
                              label={skill}
                              sx={{ height: '28px', fontWeight: '400'}}
                            />
                          )
                        })}
                      </div>
                    </TableCell>
                    <TableCell align="left" width='212px'>
                      <div className={styles.contacts}>
                        <div className={styles.contact}>
                          <img src={telegramIcon} alt={'Телеграм'} />
                          <p className={styles.contact__text}>{row.contacts.tg}</p>
                        </div>
                        <div className={styles.contact}>
                          <img src={emailIcon} alt={'Электронная почта'} />
                          <p className={styles.contact__text}>{row.contacts.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" width='58px'>
                      {row.isLiked ?
                        (<ActiveLikeIcon />)
                        : (<InactiveLikeIcon />)
                      }
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.table__bottom}>
          <p className={styles.selected}>
            Выбрано элементов: {2}
          </p>
          <div className={styles.table__buttons}>
            <CustomButton customType={"customContained"}>Добавить в избранное</CustomButton>
            <CustomButton customType={"customContained"}>Экспортировать</CustomButton>
          </div>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          // component={'div'}
          component={() => {
            return (
              <>
                <Pagination
                  count={10}
                  variant="outlined"
                />
              </>)}}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={''}
          labelDisplayedRows={() => null}
        />
      </Paper>
    </Box>
    </ThemeProvider>
  );
}
