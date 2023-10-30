import * as React from "react";
import {Chip} from "@mui/material";

export default function SkillsTableChips({skills}: {skills: string[]}): React.ReactElement[] {
  const stringLength = skills[0]?.length + skills[1]?.length + skills[2]?.length;
  let chipCount;
  if (stringLength >= 20) chipCount = 2;
  else chipCount = 3;
  const res = skills.slice(0, chipCount).map(skill => (
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
  if (skills.length <= chipCount)
    return res;
  // >=4
  res.push(
    <Chip
    key={'rest'}
    label={`${skills.length - chipCount}+`}
    variant={"outlined"}
    sx={{
      height: '28px',
      fontWeight: '400',
      backgroundColor: 'transparent',
      borderColor: 'rgba(90, 155, 255, 1)',
      '& .MuiChip-label': {
        padding: '0 8px',
      },
    }}
  />
  );
  return res;
}
