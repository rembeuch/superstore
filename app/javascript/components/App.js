import React, { useEffect, useState } from 'react';
import axios from 'axios';
import State from './State';
import Month from './Month';
import Year from './Year';
import Chart from './Chart';
import styled from 'styled-components';
import YearRevenue from './YearRevenue';
import YearAverage from './YearAverage';
import YearCustomer from './YearCustomer';




const divStyle = {
    margin: '30px',
    display: "flex",
  };

const filterStyle = {
    margin: "0 auto",

}
const ButtonStyle = styled("button")`
border: 0;
line-height: 2.5;
padding: 0 20px;
font-size: 1rem;
text-align: center;
color: #fff;
text-shadow: 1px 1px 1px #000;
border-radius: 10px;
background-color: rgba(220, 0, 0, 1);
background-image: linear-gradient(to top left,
                                  rgba(0, 0, 0, .2),
                                  rgba(0, 0, 0, .2) 30%,
                                  rgba(0, 0, 0, 0));
box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
            inset -2px -2px 3px rgba(0, 0, 0, .6);


&:hover {
background-color: rgba(255, 0, 0, 1);
}

&:active {
box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
            inset 2px 2px 3px rgba(0, 0, 0, .6);
}
`


const cardStyle = {
    margin: "0 auto",
    border: '2px solid black',
    padding: "12px",
    textAlign: "center",
}

const App = () => {
    const [data, setData] = useState([]);
    const [displayState, setDisplayState] = useState('')
    const [displayMonth, setDisplayMonth] = useState('')
    const [displayYear, setDisplayYear] = useState('')
    const [previousRevenue, setPreviousRevenue] = useState([])



    useEffect(() => {
        if (data) {
            return;
        }else {
            fetchData()
        }
    },[data.length])

    const fetchData = () => {
        if (data.length === 0){
            axios.get('/api/v1/data.json').then(resp => {
            setData(resp.data.data)
        })
        .catch(resp => console.log(resp))
        }
        if (displayState !== '') {
            setDisplayState('')
            setDisplayYear('')
            setDisplayMonth('')
        }
    }

    const sum = data.map(item => {
        return (
            item.attributes.sales
        )
    })


    const initialValue = 0;
    const sumWithInitial = sum.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    const orderNumber = data.map(item => {
        return item.attributes.order_id
     }).length


    const averageOrder = sumWithInitial / orderNumber

    const customerList = data.map(item => {
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


    const handleClickState = (e) => {
        if (e.target.innerText === 'States ⬇️') {
            return
        }
        else if (e.target.innerText === 'New Search') {
            setData([]);
            setDisplayState('')
            setDisplayMonth('')
            setDisplayYear('')
            setPreviousRevenue([])
        }else if (e.target.innerText === 'All'){
            setDisplayState(e.target.innerText)
        }
        else {
            setData(data.filter((element) => element.attributes.state === e.target.innerText));
            setDisplayState(e.target.innerText)
        }
    }

    const handleClickYear = (e) => {
        if (e.target.innerText === 'Years ⬇️') {
            return
        }
        else if (e.target.innerText === 'All') {    
            setDisplayYear(e.target.innerText)
        }else {
            setDisplayYear(e.target.innerText)
            setPreviousRevenue(data.filter((element) => new Date(element.attributes.order_date).getFullYear() === (parseInt(e.target.innerText)- 1)))
            setData(data.filter((element) => new Date(element.attributes.order_date).getFullYear().toString() === e.target.innerText))
        }
    }

    const handleClickMonth = (e) => {
        if (e.target.innerText === 'Months ⬇️') {  
            return
        } 
        else if (e.target.innerText === 'All'){
            setDisplayMonth(e.target.innerText)
        }else{
            setPreviousRevenue(previousRevenue.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === e.target.innerText));
            setData(data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === e.target.innerText));
            setDisplayMonth(e.target.innerText)
        }
    }

    

    return (
        <div>
            <div className='filters' style={divStyle}>
            <div style={filterStyle}>         
                    {displayState !== '' ? <ButtonStyle onClick={(e) => handleClickState(e)}> New Search</ButtonStyle> :  <span onClick={(e) => handleClickState(e)}> <State data={data}  /> </span>}    
                    </div>
                    <div style={filterStyle}>
                       <h3> {displayState !== '' ? <span>State: {displayState}</span> : "" }
                       </h3>   
                       <h4>{displayYear !== '' ? <span>Year: {displayYear}</span> : ''}</h4>
                       <h4>{displayMonth !== '' ? <span>Month: {displayMonth}</span> : ''}</h4> 
                    </div>
                    
                    <div style={filterStyle}>         
                        {(displayState !== '' && displayYear === '') ? <span onClick={(e) => handleClickYear(e)}> <Year  /> </span> : "" }      
                    </div>
                    <div style={filterStyle}>         
                        {(displayYear !== '' && displayMonth === '') ? <span onClick={(e) => handleClickMonth(e)}> <Month  /> </span> : "" }  
                    </div>
            </div>
            <div className='cards' style={divStyle}>
                <div className='card' style={cardStyle}> <h3>Revenue:</h3>   
                    $ {Math.abs(sumWithInitial) > 999 ? Math.sign(sumWithInitial)*((Math.abs(sumWithInitial)/1000).toFixed(2)) + 'k' : Math.sign(sumWithInitial)*Math.abs(sumWithInitial).toFixed(2)}
                    {(displayYear && displayYear !== 'All') ? <p>n-1: <YearRevenue data={data} previousRevenue={previousRevenue} /> </p> : ""} 
                </div>
                <div className='card' style={cardStyle}><h3>Revenue/Order:</h3>
                    $ {!isNaN(averageOrder) ? averageOrder.toFixed(2) : fetchData()}
                    {displayYear && displayYear !== 'All' ? <p>n-1: <YearAverage data={data} previousRevenue={previousRevenue} /> </p> : ""} 
                </div>
                <div className='card' style={cardStyle}><h3>Customers:</h3>
                    {customerFilteredNumber !== 0 ? customerFilteredNumber : 0} 
                    {(displayYear && displayYear !== 'All') ? <p>n-1: <YearCustomer data={data} previousRevenue={previousRevenue} /> </p> : ""}
                </div>
            </div>
            <div>
                <h2>Revenue per month</h2> 
                
                <Chart data={data}/>
            </div> 
        </div>
    );
};

export default App;