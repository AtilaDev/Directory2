import { ChangeEvent, FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';
import { Container } from '@mui/material';

interface Props extends PropsWithChildren {
  title: string;
  pageDescription: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const DirectoryLayout: FC<Props> = ({
  title,
  pageDescription,
  onChange,
  children,
}) => {
  return (
    <Container>
      <Head>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
      </Head>

      <nav>
        <Navbar onChange={onChange} />
      </nav>

      <main className='mainLayout'>{children}</main>
    </Container>
  );
};
