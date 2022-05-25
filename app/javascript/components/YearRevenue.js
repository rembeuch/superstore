import React from 'react';


const YearRevenue = ({data, previousRevenue}) => {


    const sum = data.map(item => {
        return (
            item.attributes.sales
        )
    })

    const sumPrevYear = previousRevenue.map(item => {
        return (
            item.attributes.sales
        )
    })

    const prevValue = 0;
    const previousSum = sumPrevYear.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        prevValue
    );
        


    const initialValue = 0;
    const sumWithInitial = sum.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    return (
        <div style={(sumWithInitial - previousSum) > 0 ? {color: "green"} : {color: "red"}}>
           $ {previousSum !== 0 ? Math.sign(sumWithInitial - previousSum)*((Math.abs(sumWithInitial - previousSum)/1000).toFixed(2)) + 'k' : "No Data Before this year"}
        </div>
    );
};

export default YearRevenue;