import { useEffect, useState } from "react";
import "./styles.css";

interface CustomTooltipProps {
  label?: string;
  active?: boolean;
  payload?: {
    value: number;
  }[];
}

function CustomTooltip({ payload }: CustomTooltipProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (payload && payload.length > 0) {
      setValue(
        Intl.NumberFormat("en", { currency: "USD", style: "currency" }).format(
          payload[0].value
        )
      );
    }
  }, [payload]);

  return (
    <div className="tooltip-component">
      <label>{value}</label>
    </div>
  );
}

export default CustomTooltip;
