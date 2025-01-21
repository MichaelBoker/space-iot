import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 40px;

section#finance-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
div#all-finance {
    height: 97vh;
    box-shadow: inset 0 0 10px 5px #efefef;
    border-radius: 7%;
    margin-top: 10px;
    margin-right: 10px;
}
div#pie-chart {
    width: 50%;
}
`

export default Wrapper