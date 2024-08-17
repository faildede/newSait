import { Input } from "@nextui-org/react";

const PhoneNumberInput = () => {
  return (
    <Input
      type="tel"
      label="Phone Number"
      placeholder="(123) 456-7890"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      maxLength="14"
      required
    />
  );
};

export default PhoneNumberInput;
