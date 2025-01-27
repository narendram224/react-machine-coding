import { Fragment, useRef, useState } from "react";
import style from "./otp.module.css";
interface OtpProps {
  length: number;
  onComplete: (otp: string) => void;
  seperator?: string;
  inputClass?: string;
  inputContainerClass?: string;
}
export const OtpComponent = ({
  length,
  onComplete,
  seperator,
  inputContainerClass,
  inputClass,
  ...rest
}: OtpProps) => {
  const inputRefs = useRef<HTMLInputElement[] | null[]>(
    new Array(length).fill(null)
  );
  const listOfInputs = new Array(length).fill("");
  const [otp, setOtp] = useState(listOfInputs);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    const newValue = [...otp];
    newValue[index] = value;
    setOtp(newValue);

    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (value && index >= 0) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newValue.join("").length === length) {
      onComplete(newValue.join(","));
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Otp Component</h1>
      <div className={`${style.otpInputContainer} ${inputContainerClass}`}>
        {listOfInputs.map((_, index) => (
          <Fragment key={index}>
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={(e) => handleChange(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              pattern="[0-9]*"
              className={`${style.otpInput} ${inputClass}`}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              {...rest}
            />
            {index < length - 1 ? seperator : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OtpComponent;
