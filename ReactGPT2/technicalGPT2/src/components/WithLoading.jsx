// Write a higher-order component (HOC) called withLoading that wraps any component and displays
// a loading message while data is being fetched. It should accept a loading prop and render the wrapped component only when loading is false.
// Bonus: Make the HOC reusable for various data types and components by passing the data prop.

import React from "react";

export default function WithLoading(WrappedComponent){
    return function WrappedComponent(props){ 
    if (props.loading){
        return <main><p>...loading</p>    </main>
    }else {
    return <WrappedComponent {...props.data}/>
 }
}
}