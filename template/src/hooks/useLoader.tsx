import { createProvider, useModel } from 'react-declarative';

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
        debounce: 0,
    });
    const payload = {
        loader: !!model.data.loader,
        setLoader: (loader: boolean) => model.setData((data) => ({
            loader: data.loader + (loader ? 1 : -1),
        })),
    };
    return (
        <LoaderProviderCtx payload={payload}>
            {children}
        </LoaderProviderCtx>
    );
};

export default useLoader;
