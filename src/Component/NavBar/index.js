import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem, ListItemText, Link } from "@mui/material";
import { OrganList } from "./OrganList";

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
                <List >
                    {OrganList.map((item, index) => (
                        <Link href={item.link} underline="none" color="black">
                            <ListItem button key={index}>
                                <ListItemText
                                    primary={item.value}
                                ></ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default NabBar;
