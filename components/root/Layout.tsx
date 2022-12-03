import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container
      xl
      gap={0}
      css={{
        minWidth: "360px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container css={{ flexGrow: 1 }}>{children}</Container>
      <Footer />
    </Container>
  );
}

export default Layout;
