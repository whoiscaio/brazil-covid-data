import { ReactNode } from 'react';
import AppInfoContainer from './styles';

type PageInfoProps = {
  children: ReactNode,
}

function PageInfo({ children }: PageInfoProps) {
  return (
    <AppInfoContainer>
      {children}
    </AppInfoContainer>
  );
}

export default PageInfo;
