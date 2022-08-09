import Joi from "joi";

class JoiErrorHandlingJoi {
  JoiErrorHandling(value: Array<Joi.ValidationErrorItem>) {
    const result = value.map((e) => {
      return { [e.path as any]: e.message }
    })

    return result
  }
}

export default new JoiErrorHandlingJoi()