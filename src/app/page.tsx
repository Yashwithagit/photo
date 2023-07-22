"use client";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
  background-color: blue;
  width: 100%;
  height: 100vh;
`;

export default function Page() {
  return <Container></Container>;
}
