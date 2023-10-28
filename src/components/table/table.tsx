import * as React from 'react';
import { useMemo, useState} from 'react';
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
import {rows, tableOptions} from "../../utils/constants/constants";
import downloadIcon from '../../images/download-white.svg';
import ResultsNotFound from "../results-not-found/results-not-found";
import {IData, TOrder} from "../../utils/types";
import EnhancedTableHead from "../enhanced-table-head/enhanced-table-head";
import {getComparator, profileScoreComparator} from "../../utils/helpers";
import SkillsTableChips from "../skills-table-chips/skills-table-chips";


const CheckboxIcon = <img src={checkboxIcon} alt={'Чекбокс'} className={styles.checkbox} />;
const InactiveCheckBoxIcon = <img src={inactiveCheckboxIcon} alt={'Чекбокс'} className={styles.checkbox}/>;
const InactiveLikeIcon = () => (<button className={styles.like_inactive}/>);
const ActiveLikeIcon = () => ( <button className={styles.like_active}/>);

type TEnhancedTableProps = {
  areCandidatesFound: boolean,
}

export default function EnhancedTable({ areCandidatesFound }: TEnhancedTableProps) {
  const paginationOptions = tableOptions.pagination.map(option => option.text);
  const [pageOption, setPageOption] = useState<string>(paginationOptions[0]);
  const [order, setOrder] = useState<TOrder>('desc');
  const [orderBy, setOrderBy] = useState<keyof IData>('profile');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const numberOfPages = Math.ceil(rows.length/rowsPerPage);
  const refinedRows = useMemo(() => rows
    .slice()
    .sort(profileScoreComparator)
    .map((row, index) => ({...row, id: index + 1})),
    [rows]
  );

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
      const newSelected = refinedRows.map((n) => n.id);
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
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string[] } }) => {
    const newValue = event.target.value[0];
    const option = tableOptions.pagination.find(option => option.text === newValue) || tableOptions.pagination[0];
    setPageOption(newValue);
    setRowsPerPage(option.value);
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

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


  return (
    <ThemeProvider theme={themeInput}>
      <div className={styles.table__top}>
        <SelectInput filterOptions={paginationOptions}
                     isMulti={false}
                     width={300}
                     onChange={handleChangeRowsPerPage}
                     disabled={!areCandidatesFound}
                     value={pageOption}
        />
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
                rowCount={refinedRows.length}
              />
              { !areCandidatesFound ? (
                <TableCell colSpan={8} sx={{ padding: 0, borderBottom: 0}}>
                  <ResultsNotFound />
                </TableCell>
              ) : (
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
                  <CustomButton customType={"customContained"} width={220}>Добавить в избранное</CustomButton>
                  <CustomButton customType={"customContained"}>
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
