export const FormData = {
    Liver: {
        name: "liver",
        label: "肝臟",
        content: {
            normal: false, //正常 Boolean
            FLD: 0, //脂肪肝 0,1,2,3
            SLPL: true, //疑似肝實質病變 Boolean
            LPL: false, //肝實質病變 Boolean
            LC: true, //肝硬化 Boolean
            PLD: null, //肝囊腫 null無,left左葉,right右葉
            HEM: "left", //血管瘤 null無,left左葉,right右葉
            IC: "right", //肝內鈣化點 null無,left左葉,right右葉
            HEP: "left", //肝腫瘤(疑似肝癌) null無,left左葉,right右葉
            HEPU: null, //肝腫瘤(性質不明) null無,left左葉,right右葉
        },
    },
};

export const LiveColumns = [
    {
        name: "liver",
        label: "肝臟",
        cols: [
            {
                name: "FLD",
                label: "脂肪肝",
                type: "radio",
                options: [
                    { label: "輕度", value: 1 },
                    { label: "中度", value: 2 },
                    { label: "重度", value: 3 },
                ],
            },
            {
                name: "SLPL",
                label: "疑似肝實質病變",
                type: "checkbox",
            },
            {
                name: "LPL",
                label: "肝實質病變",
                type: "checkbox",
            },
            {
                name: "LC",
                label: "肝硬化",
                type: "checkbox",
            },
            {
                name: "PLD",
                label: "肝囊腫",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEM",
                label: "血管瘤",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "IC",
                label: "肝內鈣化點",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEP",
                label: "肝腫瘤(疑似肝癌)",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEPU",
                label: "肝腫瘤(性質不明)",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "other",
                label: "其他",
                type: "text",
            },
        ],
    },
];
