import {Helmet} from 'react-helmet-async';
// @mui
import {
  Container,
  Divider,
  Grid,
  Stack
} from '@mui/material';
// auth
// form
// @mui
// redux
// routes
// @types
// components
// sections

import useResponsive from 'src/hooks/useResponsive';
import {ICONS} from 'src/layouts/dashboard/nav/config-navigation';
import {DN404List} from 'src/sections/@dashboard/e-commerce/shop';
import {AnalyticsOrderTimeline} from 'src/sections/@dashboard/general/analytics';
import DN404Invite from 'src/sections/@dashboard/general/app/DN404Invite';
import DN404Recommends from 'src/sections/@dashboard/general/app/DN404Recommends';
import {ProfilePostCard} from 'src/sections/@dashboard/user/profile';
import ProfilePostInput from 'src/sections/@dashboard/user/profile/home/ProfilePostInput';
import {useSettingsContext} from '../../components/settings';
import {useDispatch,useSelector} from '../../redux/store';
// _mock_
import {
  _analyticOrderTimeline,
  _appRelated,
  _appRelated2,
  _bookingReview,
  _userFeeds,
} from '../../_mock/arrays';
// components
// sections
// assets

// ----------------------------------------------------------------------

const sideSetting = [
  {
    name: 'notifications',
    icon: ICONS.ecommerce,
  },
];
export default function DN404HomePage() {

  const dispatch = useDispatch();

  const { products, checkout } = useSelector((state) => state.product);

  // const dataFiltered = applyFilter(products, values);

  const { themeStretch } = useSettingsContext();
  const isMobile = useResponsive('down', 'sm');
  return (
    <>
      <Helmet>
        <title> General: App | NotPump</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {!isMobile ? (
            <Grid item xs={12} md={3} sx={{ position: 'sticky', top: 0 }}>
              <Stack spacing={3}>
                <AnalyticsOrderTimeline title="Last acitivity" list={_analyticOrderTimeline} />
              </Stack>
            </Grid>
          ) : (
            ''
          )}
          <Grid
            item
            xs={12}
            md={isMobile ? 12 : 5}
            sx={{
              overflowY: 'scroll',
              maxHeight: '100vh',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none', // IE and Edge
              'scrollbar-width': 'none', // Firefox
            }}
          >
            <Stack spacing={3}>
              <ProfilePostInput />
              <DN404List products={products} loading={!products.length} />
              {_userFeeds.map((post) => (
                <ProfilePostCard key={post.id} post={post} />
              ))}
            </Stack>
          </Grid>
          {!isMobile ? (
            <Grid item xs={12} md={3} sx={{ position: 'sticky', top: 0 }}>
              <Stack spacing={4}>
                <DN404Invite
                  title="Invite friends to Laicos"
                  subheader="Send your friend a link to signup or gift them an invitation to join for free."
                  list={_bookingReview}
                />
                <DN404Recommends title="Suggested Follows" list={_appRelated} />
                <Divider />
                <DN404Recommends title="Top Follows" list={_appRelated2} />
              </Stack>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Container>
    </>
  );
}
