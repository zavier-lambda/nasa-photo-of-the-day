import React from "react"; 
import styled from "styled-components";
import nasaLogo from './nasa.png'

const Head = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 1%;

    button {
        color: red;
        border: 2px solid red;
        padding: 0.5%;
        margin: 0.5%;
    }
`



export default function Header() {
    return (
        <Head>
            <div>
                <img src={nasaLogo} alt="Nasa logo"/>
            </div>  
            <nav>
                <button href="#">Home</button>
                <button href="#">About</button>
                <button href="#">Sign Up</button>
            </nav>
        </Head>
    )
}