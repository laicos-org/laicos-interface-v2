import { useRef, useState } from 'react';
// @mui
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Chip, Fab, IconButton, Stack, Typography } from '@mui/material';
// components
import { useForm } from 'react-hook-form';
import FormProvider, { RHFEditor } from 'src/components/hook-form';
import { FormValuesProps } from 'src/sections/@dashboard/blog/BlogNewPostForm';
import Iconify from '../../../../../components/iconify';

// ----------------------------------------------------------------------

export default function ProfilePostInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickAttach = () => {
    fileInputRef.current?.click();
  };
  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
    cover: Yup.mixed().required('Cover is required').nullable(true),
    content: Yup.string().required('Content is required'),
  });
  const defaultValues = {
    title: '',
    description: '',
    content: '',
    cover: null,
    tags: ['The Kid'],
    publish: true,
    comments: true,
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });
  const [height, setHeight] = useState(120);
  return (
    <Card sx={{ p: 3 }} onFocus={() => setHeight(200)} onBlur={() => setHeight(120)}>
      <Stack spacing={1} pb={2}>
        <FormProvider methods={methods} onSubmit={() => {}}>
          <RHFEditor simple name="content" sx={{ height, transition: '0.2s' }} />
        </FormProvider>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="left" justifyContent="space-between">
          <IconButton color="success"><Iconify icon="eva:image-2-fill" width={24} /></IconButton>
          <IconButton color="info"><Iconify icon="eva:video-fill" width={24} /></IconButton>
          <IconButton color="warning"><Iconify icon="eva:navigation-2-fill" width={24}  /></IconButton>
          <IconButton color="error"><Iconify icon="eva:pricetags-fill" width={24}  /></IconButton>
          <IconButton color="primary"><Iconify icon="eva:smiling-face-fill" width={24} /></IconButton>
        </Stack>

        <Button variant="contained">Post</Button>
      </Stack>

      <input ref={fileInputRef} type="file" style={{ display: 'none' }} />
    </Card>
  );
}
