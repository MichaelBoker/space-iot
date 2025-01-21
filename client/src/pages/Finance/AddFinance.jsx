import { Form } from "react-router-dom"
import FormRow from "../../components/FormRow"
import { FINANCE_GROUP } from "../../../../utils/constant"

const AddFinance = () => {
  return (
    <div id="add-finance">
      <Form method="post" className="form">
        <FormRow type="text" name="title" label="Title" required={true} />
        <FormRow type="text" name="description" label="Description" />
        <FormRow type="number" name="amount" label="Amount" required={true} />
        <FormRow type="date"/>
        <FormRow type="select" name="group" label="Group" required={true} 
        listValues={Object.entries(FINANCE_GROUP).map( group => group[1])} />
        <FormRow type="file" name="invoice" label="Invoice" />
      </Form>
    </div>
  )
}
export default AddFinance