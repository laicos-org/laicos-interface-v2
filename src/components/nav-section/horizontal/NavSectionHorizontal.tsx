import { memo } from 'react';
// @mui
import { Stack } from '@mui/material';
// utils
import {PATH_DASHBOARD} from 'src/routes/paths';
import {useWalletClient} from 'wagmi';
import { hideScrollbarY } from '../../../utils/cssStyles';
//
import { NavSectionProps, NavListProps } from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

function NavSectionHorizontal({ data, sx, ...other }: NavSectionProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mx: 'auto',
        ...hideScrollbarY,
        ...sx,
      }}
      {...other}
    >
      {data.map((group) => (
        <Items key={group.subheader} items={group.items} />
      ))}
    </Stack>
  );
}

export default memo(NavSectionHorizontal);

// ----------------------------------------------------------------------

type ItemsProps = {
  items: NavListProps[];
};

function Items({ items }: ItemsProps) {
  const wallet = useWalletClient()
  return (
    <>
      {items.map((list) => {
        if (list.path === PATH_DASHBOARD.user.profile && !wallet?.data?.account?.address)
          return <div />;
        return (
          <NavList key={list.title + list.path} data={list} depth={1} hasChild={!!list.children} />
        );
      })}
    </>
  );
}
