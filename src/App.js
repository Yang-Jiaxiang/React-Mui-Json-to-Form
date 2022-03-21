import NavBar from "./Component/NavBar";
import FormContent from "./Component/Content/index";
import { Grid } from "@mui/material";
import {formTemplate} from "./Component/formTemplate"

function App() {
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <NavBar />
                </Grid>
                <Grid item xs={9}>
                    <FormContent formTemplate={formTemplate} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
