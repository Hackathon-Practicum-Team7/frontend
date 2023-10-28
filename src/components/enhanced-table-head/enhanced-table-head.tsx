import {IData, TOrder} from "../../utils/types";
import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";
import {headCells, newHeadCells} from "../../utils/constants/constants";
import checkboxIcon from "../../images/checkbox.svg";
import styles from "../table/table.module.css";
import inactiveCheckboxIcon from "../../images/checkbox-not-active.svg";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TOrder;
  orderBy: string;
  rowCount: number;
}

const CheckboxIcon = <img src={checkboxIcon} alt={'Чекбокс'} className={styles.checkbox} />;
const InactiveCheckBoxIcon = <img src={inactiveCheckboxIcon} alt={'Чекбокс'} className={styles.checkbox}/>;

export default function EnhancedTableHead(props: EnhancedTableProps) {
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
              'aria-label': 'select all',
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
