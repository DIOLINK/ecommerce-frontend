import { IObjectInputs, OBJECT_INPUTS } from './Object.inputs'

interface InputFieldProps {
  keyObjectInput: IObjectInputs
}

export default function InputField({ keyObjectInput }: InputFieldProps) {
  return (
    <>
      <label className="input validator">{OBJECT_INPUTS[keyObjectInput]}</label>
      <p className="validator-hint">
        Must be 3 to 30 characters
        <br />
        containing only letters, numbers or dash
      </p>
    </>
  )
}
