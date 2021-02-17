import styled from 'styled-components';
import { Box } from './atoms/Box';
import { Link } from './atoms/Link';
import { Typography } from './atoms/Typography';

const listItems: {
  text: string;
  link: string;
  href: string;
}[] = [
  {
    text: 'Github',
    link: '@kevinbai0',
    href: 'https://www.github.com/kevinbai0',
  },
  {
    text: 'Twitter',
    link: '@kevinbai0',
    href: 'https://www.twitter.com/kevinbai0',
  },
  {
    text: 'LinkedIn',
    link: '@kevinbai0',
    href: 'https://www.linkedin.com/in/kevinbai0',
  },
  {
    text: 'Email',
    link: 'kevin@tabtabapp.io',
    href: 'mailto:kevin@tabtabapp.io',
  },
];

export const MainSite = () => {
  return (
    <Box p={[20, 40]} maxWidth={600} align="center">
      <Typography font="header1">Hey, I'm Kevin Bai</Typography>

      <Typography mt={8} font="bodyBig">
        I'm currently working on{' '}
        <Link href={'https://www.joinslash.com'}>Slash</Link>, a consumer
        fintech startup.
      </Typography>

      <Box mt={32}>
        <Typography mb={8} font="header3">
          Links
        </Typography>
        {listItems.map((item, index) => (
          <Box key={index}>
            <Typography>
              {item.text}: <Link href={item.href}>{item.link}</Link>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
