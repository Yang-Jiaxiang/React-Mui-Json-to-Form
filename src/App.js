import NavBar from './Component/NavBar'
import FormContent from './Component/Content'
import { Grid } from "@mui/material";

function App() {
    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                  <NavBar/>
                </Grid>
                <Grid item xs={8}>
                  <FormContent/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
