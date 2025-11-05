import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=> {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => response.json())
        .then((resJson) => setData(resJson.rates))
        console.log(data)
    }, [currency])
    return data;
}

export default useCurrencyInfo