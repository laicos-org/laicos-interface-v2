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
    content: Yup.string(),
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
  const [height, setHeight] = useState(0);
  return (
    <Card sx={{ p: 3}} >
      <Stack spacing={1} pb={0} sx={{height, transition: '0.4s', ...(height === 0 ? {opacity: '0'} : {opacity: '1'})}} onBlur={() => setHeight(0)}>
        <FormProvider methods={methods} onSubmit={() => {}}>
          <RHFEditor simple name="content" sx={{border: 'none'}}/>
        </FormProvider>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" onFocus={() => setHeight(200)}>
        <Stack direction="row" spacing={1} alignItems="left" justifyContent="space-between">
          <IconButton color="success" onClick={handleClickAttach}><Iconify icon="eva:image-2-fill" width={24} /></IconButton>
          <IconButton color="info" onClick={handleClickAttach}><Iconify icon="eva:video-fill" width={24} /></IconButton>
          <IconButton color="warning" onClick={handleClickAttach}><Iconify icon="eva:navigation-2-fill" width={24}  /></IconButton>
          <IconButton color="error" onClick={handleClickAttach}><Iconify icon="eva:pricetags-fill" width={24}  /></IconButton>
          <IconButton color="primary" onClick={handleClickAttach}><Iconify icon="eva:smiling-face-fill" width={24} /></IconButton>
        </Stack>
        <Button color="success" variant="soft"><Iconify icon="eva:edit-2-outline" pr={0.5} width={24} /> Post</Button>
      </Stack>

      <input ref={fileInputRef} type="file" style={{ display: 'none' }} />
    </Card>
  );
}
