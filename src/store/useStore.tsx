import {Component, createContext, useContext} from "react";
import FeatureStore from "./FeatureStore.tsx";


const StoreContext = createContext(FeatureStore);

export class StoreProvider extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <StoreContext.Provider value={FeatureStore}>{children}</StoreContext.Provider>
        );
    }
}

const useStore = () => useContext(StoreContext);
export default useStore;
