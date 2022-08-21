import { makeAutoObservable } from 'mobx';
import { createProvider } from 'react-declarative';

export const [LoaderProvider, useLoader] = createProvider(() => new class {
    
    _loader = 0;

    constructor() {
        makeAutoObservable(this);
    };

    get loader() {
        return !!this._loader;
    };

    setLoader = (loader: boolean) => {
        this._loader = Math.max(this._loader + (loader ? 1 : -1), 0)
    };

});

export default useLoader;
