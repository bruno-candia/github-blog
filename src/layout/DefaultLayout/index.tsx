import { DefaultLayoutWrapper, PageContainer } from "./styles";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DefaultLayoutWrapper>
  );
}
