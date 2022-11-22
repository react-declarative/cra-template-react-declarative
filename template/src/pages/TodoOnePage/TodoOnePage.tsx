import { FetchView, Breadcrumbs, One, FieldType, TypedField, usePreventLeave } from 'react-declarative';

import fetchApi from '../../helpers/fetchApi';
import history from '../../helpers/history';

interface ITodoOnePageProps {
    id: string;
}

const fields: TypedField[] = [
    {
        type: FieldType.Line,
        title: 'System info'
    },
    {
        type: FieldType.Div,
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr auto',
        },
        fields: [
            {
                type: FieldType.Text,
                name: 'userId',
                title: 'User id',
                outlined: false,
                disabled: true,
            },
            {
                type: FieldType.Checkbox,
                fieldBottomMargin: "0",
                name: 'completed',
                title: "Completed",
                disabled: true,
            },
        ]
    },
    {
        type: FieldType.Line,
        title: 'Common info'
    },
    {
        type: FieldType.Text,
        name: 'title',
        title: 'Title',
    }
];

interface ITodoItem {
    completed: boolean
    id: number
    title: string
    userId: number
}

export const TodoOnePage = ({
    id,
}: ITodoOnePageProps) => {

    const fetchState = () => [
        fetchApi<ITodoItem>(`/api/v1/todos/${id}`),
    ] as const;

    const Content = (props: any) => {

        const {
            data,
            oneProps,
            beginSave,
        } = usePreventLeave({
            history,
            onSave: () => {
                alert(JSON.stringify(data, null, 2));
                return true;
            },
        });

        return (
            <>
                <Breadcrumbs
                    withSave
                    title="Todo list"
                    subtitle={props.todo.title}
                    onSave={beginSave}
                    onBack={() => history.push('/todos')}
                    saveDisabled={!data}
                />
                <One<ITodoItem>
                    handler={() => props.todo}
                    fields={fields}
                    {...oneProps}
                />
            </>
        );
    };

    return (
        <FetchView state={fetchState}>
            {(todo) => (
                <Content todo={todo} />
            )}
        </FetchView>
    );
};

export default TodoOnePage;
