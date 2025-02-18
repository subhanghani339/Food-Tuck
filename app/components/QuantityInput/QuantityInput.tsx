import React from "react";

interface QuantityInputProps {
  increment: any;
  decrement: any;
  quantity: any;
  setQuantity: any;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  increment,
  decrement,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="border border-grey-300 max-w-32 w-full flex justify-between">
      <button
        onClick={decrement}
        disabled={quantity === 0 ? true : false}
        className="px-3 border-r border-grey-300 font-medium"
      >
        -
      </button>
      <input
        type="tel"
        value={quantity}
        className="focus-visible:outline-none max-w-5 text-center text-grey-100 font-bold helvetica"
        readOnly
      />
      <button
        onClick={increment}
        disabled={quantity === 50 ? true : false}
        className="px-3 py-1 border-l border-grey-300 font-medium"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
