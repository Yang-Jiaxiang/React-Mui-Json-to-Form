import { FormData, LiveColumns } from "../FormContent";
const FormContent = () => {
    console.log(FormData);
    return <div>{JSON.stringify(FormData.Liver.name)}</div>;
};
export default FormContent;
