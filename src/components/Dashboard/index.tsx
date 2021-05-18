import React from "react";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "./styles";
import { Summary } from "../Summary";

export function DashBoard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
