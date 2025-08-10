import React, { useRef } from "react";
import { Box, TextField } from "@mui/material";

const TournamentCodeInput = ({
  onComplete,
  setValues,
  values,
  inputLength,
}) => {
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const char = e.target.value.toUpperCase().slice(-1);
    if (!/^[A-Z0-9]?$/.test(char)) return;

    const newValues = [...values];
    newValues[idx] = char;
    setValues(newValues);

    if (char && idx < inputLength - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    if (newValues.every((v) => v !== "")) {
      onComplete?.(newValues.join(""));
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
    const chars = pasted.slice(0, inputLength).split("");

    const newValues = [...values];
    chars.forEach((char, i) => {
      newValues[i] = char;
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = char;
      }
    });

    setValues(newValues);

    if (chars.length === inputLength) {
      onComplete?.(chars.join(""));
    } else {
      inputsRef.current[chars.length]?.focus();
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={{ xs: 1, sm: 2, md: 3 }}
      onPaste={handlePaste}
    >
      {values.map((val, idx) => (
        <TextField
          key={idx}
          inputRef={(el) => (inputsRef.current[idx] = el)}
          value={val}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          inputProps={{
            maxLength: 1,
            className: `
          text-center 
          uppercase 
          text-xl sm:text-2xl md:text-3xl 
          w-10 sm:w-12 md:w-14 
          h-12 sm:h-14 md:h-16
        `,
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default TournamentCodeInput;
