import React, { Component } from "react";
import CSS from "csstype";
import "./main.css";
import styles from "./maincss.module.css";


export default class CssDemo extends Component{

    public render(){

        let javascriptObjectCss:CSS.Properties={
            color:"red",
            backgroundColor:"yellow",
            borderColor:"orange",
            borderStyle:"solid",
            borderWidth:"2px"
        } 

        return (
            <React.Fragment>
                <div style={{
                    color:"red",
                    backgroundColor:"yellow",
                    borderColor:"orange",
                    borderStyle:"solid",
                    borderWidth:"2px"
                }}>
                    Inline Style
                </div>

                <div style={javascriptObjectCss}>
                    Javascript Object
                </div>
                <div className="divcss">
                    Css Stylesheet
                </div>
                <div className={styles.bigblue}>
                    Css Module
                </div>

            </React.Fragment>
        )
    }
}