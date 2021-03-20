import React from "react";

export default function Test() {
  return <div className="testdiv">Test</div>;
}

// import cc from 'classcat';
// import useStyles from 'isomorphic-style-loader/useStyles';
// import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
// import textInput from './textInput.module.scss';

// interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   hasError?: boolean;
//   isRequired?: boolean;
//   name: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   type?: 'text' | 'tel';
//   value?: string;
// }

// const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
//   (
//     {
//       className,
//       hasError,
//       id,
//       name,
//       isRequired = false,
//       onBlur,
//       onChange,
//       placeholder,
//       type = 'text',
//       value,
//       ...remainingProps
//     },
//     ref
//   ) => {
//     useStyles(textInput);

//     return (
//       <input
//         {...remainingProps}
//         aria-required={isRequired}
//         className={cc([
//           'text-input-input',
//           textInput.input,
//           className,
//           { [textInput.hasError]: hasError },
//         ])}
//         id={id}
//         name={name}
//         onBlur={onBlur}
//         onChange={onChange}
//         placeholder={placeholder}
//         ref={ref}
//         type={type}
//         value={value}
//       />
//     );
//   }
// );

// export default TextInput;
