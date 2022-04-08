import React, { useState, useEffect } from "react";

export const Counter = () => {
    const [count, setCounter] = useState(0); //Component wird nur neu gerendet wenn ein State verwendet wird
    
    useEffect(() => {  //Wert wird gerendert und dann als "Effekt" etwas ausgeführt. So kann man den Wert "einfach so" ändern
        //Wird als allerletztes ausgeführt, nachdem der Component fertig gerendert wurde.
        setCounter(count);
    }); //worauf solls hören? Wenn sich dieser Wert ändert, soll das passieren; leeres Array => wird beim aller ersten mal genau 1 Mal ausgeführt

    return (
        <div>
            <div>Anzahl Scharf: {count}</div>
            <button onClick={() => setCounter(count + 1)}>Add Scharf</button>
        </div>
    );
};

//export default Counter;

//ohne {} => default export
//mit {} => spezifisch deklarieren beim Import was man genau will
//import * as counter => alles exportieren