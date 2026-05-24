import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack, styled, useMediaQuery, useTheme } from '@mui/material';
const Wrapper = styled(Stack)(({ theme }) => ({}));

const MobileWrapper = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  height: '100vh',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

export const Layout: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  if (isMobile) {
    return (
      <MobileWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MobileWrapper>
    );
  }

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
