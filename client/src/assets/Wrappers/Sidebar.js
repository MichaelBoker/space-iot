import styled from "styled-components";

const Wrapper = styled.aside`
  width: 250px;
    display: block;
    box-shadow: rgb(0 0 0 / 10%) 1px 0px 0px 0px;

  #menu-links {
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    min-height: 100vh;

    a {
      padding-left: 1.5rem;
      transition: padding-left 0.3s ease-in-out 0s;
      display: flex;
      align-items: center;
    }
    a.active {
      padding-left: 3rem;
    }

    a:hover {
      padding-left: 3rem;
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
