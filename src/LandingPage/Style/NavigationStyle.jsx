import styled from "styled-components";

export const NavigationWrapper = styled.div`
  position: relative;
  padding: 0px;
  z-index: 1;
  .mobileNavigation {
    display: none;
  }
  .defaultNavigation {
    width: 100%;
    list-style: none;
    margin: 0;
    max-width: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    padding: 1.7rem 0px;


    .navigationButton:nth-last-child(2) {
      margin-right: 12px;
    }

    > .navigationButton {
      padding: 0px 0.6rem;
      color: rgb(105, 105, 105);
      font-family: "Poppins";

      button {
        background: inherit;
        color: inherit;
        border: none;
        outline: none;
      }

      :hover {
        cursor: pointer;
      }
    }
    .ImageContainer {
      height: 65px;
      width: 18rem;
      position: relative;

      .myImage {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 75%;
        background-size: contain;
      }
    }

    .userDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > span {
        margin-left: 8px;
      }
      button {
        margin-left: auto;
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .mobileNavigation {
      display: block;
    }
    .defaultNavigation {
      display: none;
    }
  }
`;
