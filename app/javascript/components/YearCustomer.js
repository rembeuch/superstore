import React from 'react';

const YearCustomer = ({data, previousRevenue}) => {
    const customerList = data.map(item => {
        return item.attributes.customer_id
     })

     const customerPrevious = previousRevenue.map(item => {
        return item.attributes.customer_id
     })
 
    const customerFilteredNumber = customerList.filter(function(item, pos){
        return customerList.indexOf(item)== pos; 
       })
       .sort()
       .map((item) => {
        return (
            item
        )
    }).length

    const customerPreviousNumber = customerPrevious.filter(function(item, pos){
        return customerPrevious.indexOf(item)== pos; 
       })
       .sort()
       .map((item) => {
        return (
            item
        )
    }).length

    return (
        <div>
            <div style={(customerFilteredNumber - customerPreviousNumber) > 0 ? {color: "green"} : {color: "red"}}>
                {customerPreviousNumber !== 0 ? (customerFilteredNumber - customerPreviousNumber) : "No Data Before this year"}
            </div>
        </div>
    );
};

export default YearCustomer;