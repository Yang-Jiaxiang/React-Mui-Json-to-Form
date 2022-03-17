import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OrganList from "./OrganList";

const NabBar = () => {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    mt: 1,
                }}
                component="nav"
                aria-label="mailbox folders"
            >
                <List>
                    {OrganList.map((item, index) => (
                        <ListItem button key={index}>
                            {item.value}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default NabBar;
