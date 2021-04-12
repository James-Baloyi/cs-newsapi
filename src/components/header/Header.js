import React from 'react';

export default class Header extends React.Component{
    getNewsData(){
        //search
    }

    render(){
        return (
            <div className="header">
            <table className="header-table">
                <tr>
                    <td className="text-search">
                        <input type="text" className="search default" placeholder="Search" onChange={()=>{this.getNewsData()}}/>
                    </td>
                    <td className="date-sort">
                        <input type="text" className="date-input" placeholder="Date From" onFocus={(event)=>{event.target.setAttribute("type", "date")}} onBlur={(event)=>{event.target.setAttribute("type", "text")}}/>
                        <input type="text" className="date-input" placeholder="Date To" onFocus={(event)=>{event.target.setAttribute("type", "date")}} onBlur={(event)=>{event.target.setAttribute("type", "text")}}/>
                    </td>
                    <button className="search-button" onClick={this.props.onQuerySubmit}>Search</button>
                </tr>
            </table>
        </div>
        );
    }
}