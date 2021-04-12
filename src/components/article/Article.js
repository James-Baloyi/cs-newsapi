import React from 'react';

export default class Article extends React.Component{
    componentDidMount(){
        console.log(this.props.data, "From main screen")
    }

    render(){
        try{
        if(this.props.source.name !== undefined){
        return(
            <p>hello</p>
        );
    }else{
        return(
            <div className="article-error">
            There was an error
            </div>
        );
    }
    }catch(e){
        return (<div>{e}</div>);
    }
    }
}