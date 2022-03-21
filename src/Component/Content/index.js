import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
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

                    function clearRadioButtons(name) {
                        var radioButtonArray = document.getElementsByName(name);

                        for (var i = 0; i < radioButtonArray.length; i++) {
                            var radioButton = radioButtonArray[i];
                            radioButton.checked = false;
                        }
                    }

                    switch (type) {
                        case "text":
                            return (
                                <div key={name}>
                                    {console.log(formJson)}
                                    {
                                        //formJson[formTemplate.name]                                                    .content[name]
                                    }
                                    <label htmlFor={name}>{title}</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            setFormJson({
                                                ...formJson,
                                                [formTemplate.name]: {
                                                    ...formJson[
                                                        formTemplate.name
                                                    ],
                                                    content: {
                                                        ...formJson[
                                                            formTemplate.name
                                                        ].content,
                                                        [name]: event.target
                                                            .value,
                                                    },
                                                },
                                            });
                                        }}
                                        value={
                                            formJson[formTemplate.name].content[
                                                name
                                            ]
                                        }
                                    />
                                </div>
                            );

                        case "radio":
                            return (
                                <div key={name}>
                                    <label htmlFor={name}>{title}</label>
                                    {options.map((option) => {
                                        return (
                                            <>
                                                <input
                                                    type="radio"
                                                    name={name}
                                                    value={option.value}
                                                    defaultChecked={
                                                        formJson[
                                                            formTemplate.name
                                                        ].content[name] ===
                                                        option.value
                                                            ? true
                                                            : false
                                                    }
                                                    onClick={(event) => {
                                                        {
                                                            formJson[
                                                                formTemplate.name
                                                            ].content[name] =
                                                                event.target.value;
                                                        }
                                                    }}
                                                />
                                                {option.label}
                                            </>
                                        );
                                    })}
                                    <input
                                        type="button"
                                        onClick={() => clearRadioButtons(name)}
                                        value="Clear"
                                    />
                                </div>
                            );

                        case "checkbox":
                            return (
                                <div key={name}>
                                    <label htmlFor={name}>{title}</label>
                                    <input
                                        type="checkbox"
                                        id="cbox1"
                                        value={name}
                                        defaultChecked={
                                            formJson[formTemplate.name].content[
                                                name
                                            ]
                                        }
                                        onClick={(event) => {
                                            formJson[formTemplate.name].content[
                                                name
                                            ] = event.target.checked;
                                        }}
                                    />
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
                <div>
                    <h2>{title}</h2>
                    {renderFields(fields)}
                </div>
            );
        });
    };

    return (
        <div width="100%">
            <form>
                {formTemplate()}
                <Button
                    className="btn"
                    onClick={() => {
                        console.log(formJson);
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FormContent;
