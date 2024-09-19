// @mui
import { List, Stack } from '@mui/material';
// locales
import { PATH_DASHBOARD } from 'src/routes/paths';
import {useWalletClient} from 'wagmi';
import { useLocales } from '../../../locales';
//
import { NavSectionProps } from '../types';
import { StyledSubheader } from './styles';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavSectionVertical({ data, sx, ...other }: NavSectionProps) {
  const { translate } = useLocales();
  const wallet = useWalletClient()
  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <List key={key} disablePadding sx={{ px: 2 }}>
            {group.subheader && (
              <StyledSubheader disableSticky>{`${translate(group.subheader)}`}</StyledSubheader>
            )}

            {group.items.map((list) => {
              if (list.path === PATH_DASHBOARD.user.profile && !wallet?.data?.account?.address) return <div/>
              return (
                <NavList
                  key={list.title + list.path}
                  data={list}
                  depth={1}
                  hasChild={!!list.children}
                />
              );
            })}
          </List>
        );
      })}
    </Stack>
  );
}
