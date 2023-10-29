import * as React from 'react';
import {MouseEventHandler, useEffect, useMemo, useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import styles from './table.module.css';
import {Pagination, ThemeProvider} from "@mui/material";
import emailIcon from '../../images/email-icon-gray.svg';
import phoneIcon from '../../images/phone-icon-gray.svg';
import checkboxIcon from '../../images/checkbox.svg';
import inactiveCheckboxIcon from '../../images/checkbox-not-active.svg';
import {themeInput} from "../../utils/constants/style-constants";
import {CustomButton} from "../custom-button/custom-button";
import {SelectInput} from "../select-input/select-input";
import {tableOptions} from "../../utils/constants/constants";
import downloadIcon from '../../images/download-white.svg';
import ResultsNotFound from "../results-not-found/results-not-found";
import {IData, TOrder} from "../../utils/types";
import EnhancedTableHead from "../enhanced-table-head/enhanced-table-head";
import {createData, getComparator, profileScoreComparator} from "../../utils/helpers";
import SkillsTableChips from "../skills-table-chips/skills-table-chips";
import {TTableStudent} from "../../services/slices-types";
import {useNavigate} from "react-router-dom";
import {postDownloadExcel} from "../../services/async-thunk/download-excel";
import {useDispatch} from "../../services/hooks/use-dispatch";
import {deleteFavorite, postFavourite} from "../../services/async-thunk/favorite";


const CheckboxIcon = <img src={checkboxIcon} alt={'Чекбокс'} className={styles.checkbox} />;
const InactiveCheckBoxIcon = <img src={inactiveCheckboxIcon} alt={'Чекбокс'} className={styles.checkbox}/>;

type TLikeIconProps = {
  active: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const LikeIcon = ({onClick, active}: TLikeIconProps) => (
  <button
    className={active ? styles.like_active : styles.like_inactive}
    onClick={onClick}
  />);

type TStyle = { backgroundImage: string };
const scoreMap: Record<string, TStyle> = {
  '0': { backgroundImage: 'url("src/images/avatar-progress-25.svg")' },
  '25': { backgroundImage: 'url("src/images/avatar-progress-25.svg")' },
  '50': { backgroundImage: 'url("src/images/avatar-progress-50.svg")' },
  '75': { backgroundImage: 'url("src/images/avatar-progress-75.svg")' },
  '100': { backgroundImage: 'url("src/images/avatar-progress-100.svg")' }
}

type TEnhancedTableProps = {
  areCandidatesFound: boolean,
  results: TTableStudent[]
}

export default function EnhancedTable({ areCandidatesFound, results }: TEnhancedTableProps) {
  const [rows, setRows] = useState<IData[]>([]);
  useEffect(() => {
    const initalRows = results.map((student, index) => {
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
  }, []);

  const paginationOptions = tableOptions.pagination.map(option => option.text);
  const [pageOption, setPageOption] = useState<string>(paginationOptions[0]);
  const [order, setOrder] = useState<TOrder>('desc');
  const [orderBy, setOrderBy] = useState<keyof IData>('profile');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const numberOfPages = Math.ceil(rows.length/rowsPerPage);
  const refinedRows = useMemo(() => rows
    .slice()
    .sort(profileScoreComparator)
    .map((row, index) => ({...row, id: index + 1})),
    [rows]
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const newSelected = refinedRows.map((n) => n.hash);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleStudentClick = (row: IData) => {
    navigate(`/profile/${row.hash}`)
  };

  const handleSelectClick = (event: React.MouseEvent<unknown>, hash: string) => {
    event.preventDefault();
    event.stopPropagation();
    const selectedIndex = selected.indexOf(hash);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, hash);
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
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string[] } }) => {
    const newValue = event.target.value[0];
    const option = tableOptions.pagination.find(option => option.text === newValue) || tableOptions.pagination[0];
    setPageOption(newValue);
    setRowsPerPage(option.value);
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - refinedRows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      refinedRows.slice().sort(getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [refinedRows, order, orderBy, page, rowsPerPage],
  );

  function onDownloadClick() {
    dispatch(postDownloadExcel(selected));
  }

  function onLikeClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, ids: string[]) {
    event.preventDefault();
    event.stopPropagation();
    const idsSet = new Set(ids);
    const liked: string[] = [];
    const unliked: string[] = [];
    setRows(rows.reduce((a, c) => {
      if (idsSet.has(c.hash)) {
        c.isLiked = !c.isLiked;
        if (c.isLiked) {
          liked.push(c.hash);
        } else {
          unliked.push(c.hash);
        }
      }
      a.push(c);
      return a;
    }, [] as IData[]));
    if (liked.length > 0) {
      dispatch(postFavourite(liked));
    }
    if (unliked.length > 0) {
      dispatch(deleteFavorite(unliked));
    }
  }

  return (
    <ThemeProvider theme={themeInput}>
      <div className={styles.table__top}>
        <SelectInput filterOptions={paginationOptions}
                     isMulti={false}
                     width={316}
                     onChange={handleChangeRowsPerPage}
                     disabled={!areCandidatesFound}
                     value={pageOption}
        />
      </div>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%' }}>
          <TableContainer>
            <Table
              sx={{
                minWidth: 750,
                '& .MuiTableCell-sizeMedium': {
                  padding: '12px 12px',
                },
                '& .MuiTableCell-head': {
                  padding: '16px 12px',
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
                rowCount={refinedRows.length}
              />
              { !areCandidatesFound ? (
                <TableCell colSpan={8} sx={{ padding: 0, borderBottom: 0}}>
                  <ResultsNotFound />
                </TableCell>
              ) : (
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.hash);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={() => handleStudentClick(row)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer', minHeight: '68px', maxHeight: '84px' }}
                      >
                        <TableCell
                          align={'left'}
                          id={labelId}
                          scope="row"
                          padding="none"
                          width='60px'
                        >
                          {row.id}
                        </TableCell>

                        <TableCell padding="none" width='44px' align={'center'} onClick={(event) => handleSelectClick(event, row.hash)}>
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

                        <TableCell align="left" width='292px'>
                          <div className={styles.profile}>
                            <div className={styles.profile__avatar}
                                 style={scoreMap[row.profile.score.toString()]}>
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
                            <SkillsTableChips skills={row.skills} />
                          </div>
                        </TableCell>
                        <TableCell align="left" width='212px'>
                          <div className={styles.contacts}>
                            <div className={styles.contact}>
                              <img src={phoneIcon} alt={'Телефон'} />
                              <p className={styles.contact__text}>{row.contacts.phone}</p>
                            </div>
                            <div className={styles.contact}>
                              <img src={emailIcon} alt={'Электронная почта'} />
                              <p className={styles.contact__text}>{row.contacts.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right" width='58px' sx={{ paddingRight: '4px !important'}}>
                          <LikeIcon active={row.isLiked} onClick={(event) => onLikeClick(event, [row.hash])}/>
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
              )}
            </Table>
          </TableContainer>
          { !areCandidatesFound
            ? (<></>)
            : (<>
              <div className={styles.table__bottom}>
                <p className={styles.selected}>
                  Выбрано элементов: {selected.length}
                </p>
                <div className={styles.table__buttons}>
                  <CustomButton customType={"customContained"} width={220} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onLikeClick(event, selected)}>Добавить в избранное</CustomButton>
                  <CustomButton customType={"customContained"} onClick={onDownloadClick}>
                    <>
                      <img src={downloadIcon} alt={"Экспортировать"} className={styles['download-icon']}></img>
                      <p>Экспортировать список</p>
                    </>
                  </CustomButton>
                </div>
              </div>
              <TablePagination
                rowsPerPageOptions={tableOptions.pagination.map(option => option.value)}
                component={() => {
                  return (
                    <>
                      <Pagination
                        count={numberOfPages}
                        page={page + 1}
                        variant="outlined"
                        onChange={handleChangePage}
                      />
                    </>)}}
                count={refinedRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                labelRowsPerPage={''}
                labelDisplayedRows={() => null}
              />
            </>)}
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
