import styled from "styled-components";
import colorStore from "../../asset/style/color";
// style home base
export const HomeBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${colorStore.background};
`;

// style home action
export const HomeAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  height: 60vh;
  position: relative;
  background: white;
  width: 100%;
`;

// style home icon
export const HomeIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

// style home title
export const HomeTitle = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0px;
    font-size: 30px;
    text-align: left;
    word-break: break-word;
    font-weight: bold;
  }
`;

// style home new
export const HomeNew = styled.div`
  height: 39vh;
  width: 90%;
`;

// style home new title
export const HomeNewTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// style search bar
export const HomeSearchBar = styled.div`
  width: 90%;
  margin: 40px 10px 10px 10px;
`;

// style home category
export const HomeCategory = styled.div`
  width: 90%;
  margin: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column: auto;
  grid-gap: 10px 5px;
  justify-content: center;
  align-content: center;
`;
