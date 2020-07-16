import React, { useState, useEffect } from 'react'

import axios from 'axios'



export default function Description({astroid}) {
    
    console.log(`astroid ${astroid}`);
   
    return (
        <div className="description"> 
            <p>
                {/* {astroid.forEach((item) => {
                  return (
                    <span> {item.data}</span>
                  )
                })} */}
            </p>
        </div>
    )
}