import Joi from "joi";

export const validateData = (schema: Joi.ObjectSchema, data: any) => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
        const uniqueErrors = new Set(error.details.map((d) => d.message));
        const firstError = [...uniqueErrors][0];

        return {
            success: false,
            error: firstError,
        };
    }

    return { success: true, data };
};
