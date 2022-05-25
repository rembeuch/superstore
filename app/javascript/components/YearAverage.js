import React from 'react';

const YearAverage = ({data, previousRevenue}) => {
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

    const orderNumber = data.map(item => {
        return item.attributes.order_id
     }).length

     const previousOrderNumber = previousRevenue.map(item => {
        return item.attributes.order_id
     }).length


    const averageOrder = (sumWithInitial / orderNumber) - (previousSum / previousOrderNumber)
    return (
        <div style={averageOrder > 0 ? {color: "green"} : {color: "red"}}>
           $ {!isNaN(averageOrder) ? averageOrder.toFixed(2) : "No Data Before this year"}
        </div>
    );
};

export default YearAverage;