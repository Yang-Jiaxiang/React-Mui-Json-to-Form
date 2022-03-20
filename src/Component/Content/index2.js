import React, { useState } from "react";
import { FormData, LiveColumns } from "../FormContent";
import { useForm } from "react-hook-form";

const FormContent = ({ LiverTemplate }) => {
    let { register, handleSubmit, reset } = useForm();
    let { title, fields } = LiverTemplate;

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
                            <label htmlFor={name}>{title}</label>
                            <input type="text" {...register(name)} />
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
                                            {...register(name)}
                                        />
                                        {option.label}
                                    </>
                                );
                            })}
                            <input
                                type="button"
                                onClick={()=>clearRadioButtons(name)}
                                value="Clear"
                            />
                        </div>
                    );

                default:
                    return (
                        <div>
                            <span className="red-trxt">Invalid field</span>
                        </div>
                    );
            }
        });
    };

    return (
        <div>
            <form>
                <h4>{title}</h4>
                {renderFields(fields)}
                <button
                    type="submit"
                    className="btn"
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
export default FormContent;

function onSubmit(values) {
    console.log(values);
}
