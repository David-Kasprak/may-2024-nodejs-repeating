import joi from "joi";

export class RecoveryValidator {
    public static emailField = joi.string();

    public static emailSchema = joi.object({
        email: this.emailField.required(),
    });
}
