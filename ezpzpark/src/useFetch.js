//code 'the net ninja full react tutorial 16-28
//https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=20

import React, { useEffect, useState } from "react";
    const useFetch = (url) => {
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then(data => {
                    //console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    console.log(error);
                })
        }, [url]);

        return { data, isPending, error };
    }

    export default useFetch;