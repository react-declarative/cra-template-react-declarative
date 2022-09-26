import { useCallback, useMemo } from 'react';

import { createProvider, useModel, useActualValue } from 'react-declarative';

interface IState {
    loader: number;
}

interface IContext {
    loader: boolean;
    setLoader: (loader: boolean) => void;
}

export const [LoaderProviderCtx, useLoader] = createProvider<IContext>();

export const LoaderProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const model = useModel<IState>({
        initialValue: () => ({
            loader: 0,
        }),
        debounce: 25,
    });
    const model$ = useActualValue(model);
    const setLoader = useCallback((loader: boolean) => {
        const { current: model } = model$;
        model.setData({
            loader: Math.max(model.data.loader + (loader ? 1 : -1), 0),
        });
    }, [model$]);
    const payload = useMemo((): IContext => ({
        setLoader,
        loader: !!model.data.loader,
    }), [model.data.loader, setLoader]);
    return (
        <LoaderProviderCtx payload={payload}>
            {children}
        </LoaderProviderCtx>
    );
};

export default useLoader;
