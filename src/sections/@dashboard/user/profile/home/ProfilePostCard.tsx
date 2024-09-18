import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Card,
  Link,
  Stack,
  Paper,
  Checkbox,
  InputBase,
  Typography,
  CardHeader,
  IconButton,
  InputAdornment,
  FormControlLabel,
  LinearProgress,
  Tooltip,
  Grid,
  Button,
} from '@mui/material';
// @types
import { useLocales } from 'src/locales';
import { NOTPUMP_DEFINE_FAIRLAUNCH } from 'src/descriptions/DN404';
import { ColorPreview } from 'src/components/color-utils';
import { randomInArray } from 'src/_mock';
import { AppWidgetSummary } from 'src/sections/@dashboard/general/app';
import { useSelector } from 'src/redux/store';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { paramCase } from 'change-case';
import { IUserProfilePost } from '../../../../../@types/user';
// auth
import { useAuthContext } from '../../../../../auth/useAuthContext';
// utils
import { fDate } from '../../../../../utils/formatTime';
import { fCurrency, fShortenNumber } from '../../../../../utils/formatNumber';
// components
import Image from '../../../../../components/image';
import Iconify from '../../../../../components/iconify';
import { CustomAvatar, CustomAvatarGroup } from '../../../../../components/custom-avatar';

// ----------------------------------------------------------------------

interface Props {
  post: IUserProfilePost;
}

export default function ProfilePostCard({ post }: Props) {
  const { user } = useAuthContext();

  const commentInputRef = useRef<HTMLInputElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isLiked, setLiked] = useState(post.isLiked);
  const { translate } = useLocales();

  const [likes, setLikes] = useState(post.personLikes.length);

  const [message, setMessage] = useState('');
  const theme = useTheme();
  const { products, checkout } = useSelector((state) => state.product);
  const product = randomInArray(products || []);
  const linkTo = PATH_DASHBOARD.dn404.view(paramCase(product?.name || ''));
  const hasComments = post.comments.length > 0;

  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };
  // const linkTo = PATH_DASHBOARD.dn404.view(paramCase(name));
  const handleChangeMessage = (value: string) => {
    setMessage(value);
  };

  const handleClickAttach = () => {
    const { current } = fileInputRef;
    if (current) {
      current.click();
    }
  };

  const handleClickComment = () => {
    const { current } = commentInputRef;
    if (current) {
      current.focus();
    }
  };
  const colors = [
    '#2EC4B6',
    '#E71D36',
    '#FF9F1C',
    '#011627',
    '#92140C',
    '#FFCF99',
    '#0CECDD',
    '#FFF338',
    '#FF67E7',
    '#C400FF',
    '#52006A',
    '#046582',
    '#845EC2',
    '#E4007C',
    '#2A1A5E',
    '#090088',
  ];
  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={
          <CustomAvatar
            src={post.author?.avatarUrl}
            alt={post.author?.name}
            name={post.author?.name}
          />
        }
        title={
          <Link color="inherit" variant="subtitle2">
            {post.author?.name}
          </Link>
        }
        subheader={
          <Typography variant="caption" component="div">
            <Link
              component={RouterLink}
              to={linkTo}
              sx={{ color: 'text.secondary', cursor: 'pointer' }}
            >
              {fDate(post.createdAt)}
            </Link>
          </Typography>
        }
        action={
          <IconButton>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        }
      />

      <Typography
        sx={{
          p: (_theme) => _theme.spacing(3, 3, 2, 3),
        }}
      >
        {post.message}
      </Typography>
      <Box sx={{ p: 1, cursor: 'pointer' }}>
        <Link component={RouterLink} to={linkTo}>
          <Image alt="post media" src={post.media} ratio="16/9" sx={{ borderRadius: 1 }} />
        </Link>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          p: (_theme) => _theme.spacing(2, 3, 3, 3),
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              color="error"
              checked={isLiked}
              icon={<Iconify icon="eva:heart-fill" />}
              checkedIcon={<Iconify icon="eva:heart-fill" />}
              onChange={isLiked ? handleUnlike : handleLike}
            />
          }
          label={fShortenNumber(likes)}
        />

        <CustomAvatarGroup>
          {post.personLikes.map((person) => (
            <CustomAvatar key={person.name} alt={person.name} src={person.avatarUrl} />
          ))}
        </CustomAvatarGroup>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton onClick={handleClickComment}>
          <Iconify icon="eva:message-square-fill" />
        </IconButton>

        <IconButton>
          <Iconify icon="eva:share-fill" />
        </IconButton>
      </Stack>

      {hasComments && (
        <Stack spacing={1.5} sx={{ px: 3, pb: 2 }}>
          {post.comments.map((comment) => (
            <Stack key={comment.id} direction="row" spacing={2}>
              <CustomAvatar alt={comment.author.name} src={comment.author.avatarUrl} />

              <Paper
                sx={{
                  p: 1.5,
                  flexGrow: 1,
                  bgcolor: 'background.neutral',
                }}
              >
                <Stack
                  justifyContent="space-between"
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ sm: 'center' }}
                  sx={{ mb: 0.5 }}
                >
                  <Typography variant="subtitle2">{comment.author.name}</Typography>

                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {fDate(comment.createdAt)}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {comment.message}
                </Typography>
              </Paper>
            </Stack>
          ))}
        </Stack>
      )}

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{
          p: (_theme) => _theme.spacing(0, 3, 3, 3),
        }}
      >
        <CustomAvatar src={user?.photoURL} alt={user?.displayName} name={user?.displayName} />

        <InputBase
          fullWidth
          value={message}
          inputRef={commentInputRef}
          placeholder="Write a comment…"
          onChange={(event) => handleChangeMessage(event.target.value)}
          endAdornment={
            <InputAdornment position="end" sx={{ mr: 1 }}>
              <IconButton size="small" onClick={handleClickAttach}>
                <Iconify icon="ic:round-add-photo-alternate" />
              </IconButton>

              <IconButton size="small">
                <Iconify icon="eva:smiling-face-fill" />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            pl: 1.5,
            height: 40,
            borderRadius: 1,
            border: (_theme) => `solid 1px ${alpha(_theme.palette.grey[500], 0.32)}`,
          }}
        />

        <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
      </Stack>
    </Card>
  );
}
