export const FormData = {
    Liver: {
        name: "Liver",
        label: "肝臟",
        content: {
            normal: false, //正常 Boolean
            FLD: null, //脂肪肝 null,1,2,3
            SLPL: false, //疑似肝實質病變 Boolean
            LPL: false, //肝實質病變 Boolean
            LC: false, //肝硬化 Boolean
            PLD: null, //肝囊腫 null無,left左葉,right右葉
            HEM: null, //血管瘤 null無,left左葉,right右葉
            IC: null, //肝內鈣化點 null無,left左葉,right右葉
            HEP: null, //肝腫瘤(疑似肝癌) null無,left左葉,right右葉
            HEPU: null, //肝腫瘤(性質不明) null無,left左葉,right右葉
            Other: "", //其他：
        },
    },
    Gallbladder: {
        name: "Gallbladder",
        label: "膽囊",
        content: {
            Gallstones: null, //膽結石 Single單一,Many多發
            GallbladderPolyp: null, //膽息肉 Single單一,Many多發
            Other: "", //其他：
        },
    },
    Kidney: {
        name: "Kidney",
        label: "腎臟",
        content: {
            KidneyStones: null, //腎結石null無,left左腎,right右腎
            RenalCyst: null, //腎囊腫null無,left左腎,right右腎
            KidneyCancer: null, //腎腫瘤null無,left左腎,right右腎
            Other: "", //其他：
        },
    },
    Pancreas: {
        name: "Pancreas",
        label: "胰臟",
        content: {
            Other: "", //其他：
        },
    },
    Spleen: {
        name: "Spleen",
        lable: "脾臟",
        content: {
            Splenomegaly: false, //脾臟腫大
            Other: "", //其他：
        },
    },
};
