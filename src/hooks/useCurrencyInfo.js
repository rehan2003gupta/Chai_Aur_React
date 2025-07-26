import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/ff7f40c44ff6bb383af60905/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.conversion_rates);              // ✅ fix: correct data path
        } else {
          setError("Failed to fetch currency data");
        }
      })
      .catch((err) => {
        console.log("ERROR :- FETCHING API")
      });
  }, [currency]);

  return data; // return loading & error if needed
}

export default useCurrencyInfo;
