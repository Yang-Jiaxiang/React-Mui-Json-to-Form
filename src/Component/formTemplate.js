export const formTemplate = [
    {
        name: "Liver",
        title: "肝臟",
        fields: [
            {
                title: "脂肪肝",
                type: "radio",
                name: "FLD",
                options: [
                    { label: "輕度", value: 1 },
                    { label: "中度", value: 2 },
                    { label: "重度", value: 3 },
                ],
            },
            {
                title: "疑似肝實質病變",
                type: "checkbox",
                name: "SLPL",
            },
            {
                name: "LC",
                title: "肝硬化",
                type: "checkbox",
            },
            {
                name: "PLD",
                title: "肝囊腫",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEM",
                title: "血管瘤",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "IC",
                title: "肝內鈣化點",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEP",
                title: "肝腫瘤(疑似肝癌)",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "HEPU",
                title: "肝腫瘤(性質不明)",
                type: "radio",
                options: [
                    { label: "左葉", value: "left" },
                    { label: "右葉", value: "right" },
                ],
            },
            {
                name: "Other",
                title: "其他",
                type: "text",
            },
        ],
    },
    {
        name: "Gallbladder",
        title: "膽囊",
        fields: [
            {
                name: "Gallstones",
                title: "膽結石",
                type: "radio",
                options: [
                    { label: "單一", value: "Single" },
                    { label: "多發", value: "Many" },
                ],
            },
            {
                name: "GallbladderPolyp",
                title: "膽息肉",
                type: "radio",
                options: [
                    { label: "單一", value: "Single" },
                    { label: "多發", value: "Many" },
                ],
            },
            {
                name: "Other",
                title: "其他",
                type: "text",
            },
        ],
    },
    {
        name: "Kidney",
        title: "腎臟",
        fields: [
            {
                name: "KidneyStones",
                title: "腎結石",
                type: "radio",
                options: [
                    { label: "左腎", value: "Left" },
                    { label: "右腎", value: "Right" },
                ],
            },
            {
                name: "RenalCyst",
                title: "腎囊腫",
                type: "radio",
                options: [
                    { label: "左腎", value: "Left" },
                    { label: "右腎", value: "Right" },
                ],
            },
            {
                name: "KidneyCancer",
                title: "腎腫瘤",
                type: "radio",
                options: [
                    { label: "左腎", value: "Left" },
                    { label: "右腎", value: "Right" },
                ],
            },
            {
                name: "Other",
                title: "其他",
                type: "text",
            },
        ],
    },
    {
        name: "Pancreas",
        title: "胰臟",
        fields: [
            {
                name: "Other",
                title: "其他",
                type: "text",
            },
        ],
    },
    {
        name: "Spleen",
        title: "脾臟",
        fields: [
            {
                title: "脾臟腫大",
                type: "checkbox",
                name: "Splenomegaly",
            },
            {
                name: "Other",
                title: "其他",
                type: "text",
            },
        ],
    },
];
