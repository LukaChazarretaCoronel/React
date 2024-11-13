import React, { useReducer, useContext } from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error('Unsupported action');
    }
};

const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {   
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};

const DeeplyNestedComponent = () => {
    const { state } = useCounter();
    return <p>Current count from deeply nested component: {state.count}</p>;
};

function Counter() {
    const { state, dispatch } = useCounter();

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    );
}

const CounterApp = () => {
    return (
        <CounterProvider>
            <div>
                <h2>Counter App!</h2>
                <Counter />
                <DeeplyNestedComponent />
            </div>
        </CounterProvider>
    );
};

export default CounterApp;
