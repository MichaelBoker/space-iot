import { Form } from "react-router-dom";
import FormRow from "./FormRow";

const SearchContainer = ({ searchParams }) => {
  return (
    <section>
      <Form className="form">
        {searchParams.map((param) => (
          <FormRow
            key={param.name}
            type={param.type}
            name={param.name}
            label={param.label}
            listValues={param.listValues}
          />
        ))}
      </Form>
    </section>
  );
};
export default SearchContainer;
