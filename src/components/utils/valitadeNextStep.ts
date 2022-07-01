

export function validateNextStep(personalData: any, validationFields: any) {
    const validation = validationFields.find((field: string) =>
        personalData[field] === ""
    )
    if (validation) {
        return true;
    } else {
        return false
    }
}