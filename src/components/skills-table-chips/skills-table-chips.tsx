import * as React from "react";
import {Chip} from "@mui/material";

export default function SkillsTableChips({skills}: {skills: string[]}): React.ReactElement[] {
  const res = skills.slice(0, 3).map(skill => (
    <Chip
      key={skill}
      label={skill}
      sx={{
        height: '28px',
        fontWeight: '400',
        '& .MuiChip-label': {
          padding: '0 8px',
        }
      }}

    />
  ));
  if (skills.length <= 3)
    return res;
  // >=4
  res.push(<Chip
    key={'rest'}
    label={`${skills.length - 3}+`}
    variant={"outlined"}
    sx={{
      height: '28px',
      fontWeight: '400',
      backgroundColor: 'transparent',
      borderColor: 'rgba(90, 155, 255, 1)',
      '& .MuiChip-label': {
        padding: '0 8px',
      }
    }}
  />);
  return res;
}
