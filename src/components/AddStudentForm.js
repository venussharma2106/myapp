import Button from "./Button";
import Heading from "./Heading";
import LabelWithText from "./LabelWithText";
function AddStudentForm() {
    return (
        <div>
            <Heading label="Add Student" />
            <LabelWithText label="First Name" inputId="fname" />
            <LabelWithText label="Age" inputId="age" />
            <Button label="Add" />
        </div>
    );
}

export default AddStudentForm;
