import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';


const Chart = ({data}) => {

      const initialValue = 0;



const chartData = [
{name: 'January', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "January").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'February', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "February").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'March', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "March").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'April', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "April").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'May', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "May").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'June', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "June").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'July', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "July").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'August', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "August").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'September', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "September").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'October', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "October").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'November', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "November").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
{name: 'December', revenues: data.filter((element) => new Date(element.attributes.order_date).toLocaleString('en', { month: 'long' }) === "December").map(item => {
    return (
        item.attributes.sales
    )
}).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)},
];


return (
<BarChart width={1000} height={250} data={chartData}>
	<Bar dataKey="revenues" fill="blue" />
	<XAxis dataKey="name" />
	<YAxis />
</BarChart>
);
}

export default Chart;