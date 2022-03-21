import {
    Button,
    Checkbox,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextareaAutosize,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { FormData } from "../FormContent";
import "./style.css";
const FormContent = (props) => {
    const [formJson, setFormJson] = useState(FormData);

    const formTemplate = () => {
        return props.formTemplate.map((formTemplate) => {
            const { title, name, fields } = formTemplate;

            const renderFields = (fields) => {
                return fields.map((field) => {
                    let { title, type, name, options } = field;

                    switch (type) {
                        case "text":
                            return (
                                <div key={name}>
                                    <table width="100%">
                                        <td width="30%">
                                            <FormLabel
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {title}
                                            </FormLabel>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                onChange={(event) => {
                                                    setFormJson({
                                                        ...formJson,
                                                        [formTemplate.name]: {
                                                            ...formJson[
                                                                formTemplate
                                                                    .name
                                                            ],
                                                            content: {
                                                                ...formJson[
                                                                    formTemplate
                                                                        .name
                                                                ].content,
                                                                [name]: event
                                                                    .target
                                                                    .value,
                                                            },
                                                        },
                                                    });
                                                }}
                                                value={
                                                    formJson[formTemplate.name]
                                                        .content[name]
                                                }
                                            />
                                        </td>
                                    </table>
                                </div>
                            );

                        case "radio":
                            return (
                                <div key={name}>
                                    <table width="100%">
                                        <td width="30%">
                                            <FormLabel
                                                row
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {title}
                                            </FormLabel>
                                        </td>
                                        <td>
                                            <RadioGroup
                                                row
                                                value={
                                                    formJson[formTemplate.name]
                                                        .content[name]
                                                }
                                                style={{ marginLeft: "10px" }}
                                            >
                                                {options.map((option) => {
                                                    return (
                                                        <FormControlLabel
                                                            value={option.value}
                                                            control={<Radio />}
                                                            label={option.label}
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                if (
                                                                    event.target
                                                                        .value ===
                                                                    formJson[
                                                                        formTemplate
                                                                            .name
                                                                    ].content[
                                                                        name
                                                                    ]
                                                                ) {
                                                                    setFormJson(
                                                                        {
                                                                            ...formJson,
                                                                            [formTemplate.name]:
                                                                                {
                                                                                    ...formJson[
                                                                                        formTemplate
                                                                                            .name
                                                                                    ],
                                                                                    content:
                                                                                        {
                                                                                            ...formJson[
                                                                                                formTemplate
                                                                                                    .name
                                                                                            ]
                                                                                                .content,
                                                                                            [name]: null,
                                                                                        },
                                                                                },
                                                                        }
                                                                    );
                                                                } else {
                                                                    setFormJson(
                                                                        {
                                                                            ...formJson,
                                                                            [formTemplate.name]:
                                                                                {
                                                                                    ...formJson[
                                                                                        formTemplate
                                                                                            .name
                                                                                    ],
                                                                                    content:
                                                                                        {
                                                                                            ...formJson[
                                                                                                formTemplate
                                                                                                    .name
                                                                                            ]
                                                                                                .content,
                                                                                            [name]: event
                                                                                                .target
                                                                                                .value,
                                                                                        },
                                                                                },
                                                                        }
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </RadioGroup>
                                        </td>
                                    </table>
                                </div>
                            );

                        case "checkbox":
                            return (
                                <div key={name}>
                                    <table width="100%">
                                        <td width="30%">
                                            <FormLabel
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {title}
                                            </FormLabel>
                                        </td>
                                        <td>
                                            <Checkbox
                                                id="cbox1"
                                                value={name}
                                                defaultChecked={
                                                    formJson[formTemplate.name]
                                                        .content[name]
                                                }
                                                onClick={(event) => {
                                                    formJson[
                                                        formTemplate.name
                                                    ].content[name] =
                                                        event.target.checked;
                                                }}
                                            />
                                        </td>
                                    </table>
                                </div>
                            );

                        case "Textarea":
                            return (
                                <div key={name}>
                                    <table width="100%">
                                        <td width="30%">
                                            <FormLabel
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {title}
                                            </FormLabel>
                                        </td>
                                        <td>
                                            <TextareaAutosize
                                                minRows={4}
                                                style={{ width: "90%" }}
                                                onChange={(event) => {
                                                    setFormJson({
                                                        ...formJson,
                                                        [formTemplate.name]: {
                                                            ...formJson[
                                                                formTemplate
                                                                    .name
                                                            ],
                                                            content: {
                                                                ...formJson[
                                                                    formTemplate
                                                                        .name
                                                                ].content,
                                                                [name]: event
                                                                    .target
                                                                    .value,
                                                            },
                                                        },
                                                    });
                                                }}
                                                value={
                                                    formJson[formTemplate.name]
                                                        .content[name]
                                                }
                                            />
                                        </td>
                                    </table>
                                </div>
                            );

                        default:
                            return (
                                <div>
                                    <span className="red-trxt">
                                        Invalid field
                                    </span>
                                </div>
                            );
                    }
                });
            };
            return (
                <div style={{ marginTop: "30px" }} id={name}>
                    <FormLabel
                        sx={{
                            color: "#3f50b5",
                            fontWeight: "bold",
                            fontSize: 24,
                        }}
                    >
                        {title}
                    </FormLabel>
                    <div>
                        <table width="100%">{renderFields(fields)}</table>
                    </div>
                </div>
            );
        });
    };

    return (
        <div width="100%">
            <form>
                {formTemplate()}
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className="btn"
                    onClick={() => {
                        console.log(formJson);
                    }}
                    style={{ float: "right", margin: "10px" }}
                >
                    儲存
                </Button>
            </form>
        </div>
    );
};

export default FormContent;
