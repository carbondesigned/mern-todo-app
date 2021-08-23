import styled from "styled-components";

export const StyledApp = styled.div`
  padding: 2em;

  .header {
    display: flex;
    flex-direction: column;
    gap: 5em;
  }

  h4 {
    color: ${(p) => p.theme.colors.lightAlt};
    text-transform: uppercase;
  }
`;
