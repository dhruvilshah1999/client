import "../InventoryList/InventoryList.css";
import "../UpCommingAppointment/UpCommingAppointment.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InventoryList() {

    const [inventory, setInventory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState([]);
    const totalPages = Math.ceil(inventory.length / 2);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    //get Appointment
    const getInventory = async () => {
        try {
            const res = await axios.get("/api/v1/admin/getAllInventory", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (res.data.success) {
                setInventory(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getInventory();
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * 2;
        const endIndex = startIndex + 2;
        const itemsToDisplay = inventory.slice(startIndex, endIndex);
        setDisplayedItems(itemsToDisplay);
    }, [currentPage, inventory]);

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    function renderStockButton(stock) {
        if (stock > 50) {
          return <Button type="Sufficient" />;
        } else if (stock > 10 && stock < 40) {
          return <Button type="Medium" />;
        } else {
          return <Button type="Low" />;
        }
      }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Inventroy List</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Dealers</th>
                    <th className="widgetLgTh">Item</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Stock</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {displayedItems.map((data, id) => {
                    return (
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                    className="widgetLgImg"
                                />
                                <span className="widgetLgName">{data.dealersFName} {data.dealersLName}</span>
                            </td>
                            <td className="widgetLgDate">{data.itemName}</td>
                            <td className="widgetLgAmount">${data.buyPrice}</td>
                            <td className="widgetLgAmount">{data.stock}</td>
                            <td className="widgetLgStatus">
                                {renderStockButton(data.stock)}
                            </td>
                        </tr>
                    );
                })}
            </table>
        <div className="handleButtons">
            <button className="handlePrevPage" onClick={handlePrevPage}>{'<'}</button>
            <button className="handleNextPage" onClick={handleNextPage}>{'>'}</button>
        </div>
        </div>
    );
}