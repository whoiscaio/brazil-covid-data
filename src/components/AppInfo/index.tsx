import { ReactNode } from 'react';
import AppInfoContainer from './styles';

type AppInfoProps = {
  children: ReactNode,
}

function AppInfo({ children }: AppInfoProps) {
  return (
    <AppInfoContainer>
      {children}
    </AppInfoContainer>
  );
}

export default AppInfo;
