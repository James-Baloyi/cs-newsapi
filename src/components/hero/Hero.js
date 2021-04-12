import React from 'react';

export default class Hero extends React.Component{
    componentDidMount(){
        console.log(this.props.data, "From main screen")
    }

    render(){
        if(this.props.data.source.name == undefined){
            return(<p>waiting...</p>);
        }else{
        return(
            <div className="hero">
                <img src={this.props.data.urlToImage}/>
                <br/>
                <small>{this.props.data.source.name}</small>
                <small>{this.props.data.publishedAt.split("T")[0]}</small>
                <br/>
                <h3>{this.props.data.title}</h3>
                <p className="article-body">
                    {this.props.data.content.substring(1, 171)}...
                </p>
                <a href={this.props.data.url} target="blank"><button className="search-button link">Read More</button></a>
            </div>
        );
    }
}
    }