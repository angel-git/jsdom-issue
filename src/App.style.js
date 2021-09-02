import styled from "styled-components";

export const AppStyle = styled.div`
  .parent .child {
    visibility: hidden;
    margin: 1px;
  }

  .parent:hover .child {
    visibility: visible;
    margin: 2px;
  }
`;