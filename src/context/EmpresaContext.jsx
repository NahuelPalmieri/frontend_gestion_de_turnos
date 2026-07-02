import { createContext, useContext, useState } from "react";

const EmpresaContext = createContext();

export function EmpresaProvider({ children }) {

    const [empresa, setEmpresaState] = useState(() => {

        const guardada = localStorage.getItem("empresa");

        return guardada ? JSON.parse(guardada) : null;

    });

    function setEmpresa(datosEmpresa) {

        localStorage.setItem(
            "empresa",
            JSON.stringify(datosEmpresa)
        );

        setEmpresaState(datosEmpresa);

    }

    function limpiarEmpresa() {

        localStorage.removeItem("empresa");

        setEmpresaState(null);

    }

    return (

        <EmpresaContext.Provider
            value={{
                empresa,
                setEmpresa,
                limpiarEmpresa,
            }}
        >

            {children}

        </EmpresaContext.Provider>

    );

}

export function useEmpresa() {

    return useContext(EmpresaContext);

}