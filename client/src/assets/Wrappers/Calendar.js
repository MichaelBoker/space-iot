import styled from "styled-components";

const Wrapper = styled.div`
margin-top: 25px;
display: flex;

.react-calendar {
    width: 98%;
    margin: auto;
    line-height: 3rem;
}

section#reserved-dates{
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    width: 95%;
    max-height: 90vh;
    align-items: center;
}
.form{
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-row.date-row {
    width: 50%;
}
.react-datepicker-wrapper {
    margin-left: 10px;
}
div#date-wrapper {
    width: 100%;
    display: flex;
    gap: 20px;
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ededed;
    
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d3d3d3;
    border-radius:10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3;
}
`

export default Wrapper