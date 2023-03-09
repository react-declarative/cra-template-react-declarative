import {
  FetchView,
  CardView,
  ICardViewOperation,
  ICardViewAction,
} from "react-declarative";

import fetchApi from "../../helpers/fetchApi";
import history from "../../helpers/history";

import ITodoItem from "../../model/ITodoItem";

import useLoader from "../../hooks/useLoader";

export const operations: ICardViewOperation[] = [
  {
    action: "begin-icloud-backup",
    label: "Begin iCloud backup",
    isAvailable: (selectedItems: any[], isAllSelected: boolean) =>
      !!selectedItems.length || isAllSelected,
  },
];

export const actions: ICardViewAction[] = [
  {
    action: "begin-icloud-backup",
    label: "Begin iCloud backup",
  },
];

export const TodoCardPage = () => {
  const { setLoader } = useLoader();

  const handleClick = (row: any) => {
    history.push(`/todos_card/${row.id}`);
  };

  const handleOperation = (
    operation: string,
    selectedItems: any[],
    isAllSelected: boolean
  ) => {
    alert(JSON.stringify({ operation, selectedItems, isAllSelected }, null, 2));
  };

  const handleAction = (action: string, item: any) => {
    alert(JSON.stringify({ action, item }, null, 2));
  };

  return (
    <FetchView
      state={async () => await fetchApi<ITodoItem[]>("/api/v1/todos")}
      onLoadStart={() => setLoader(true)}
      onLoadEnd={() => setLoader(false)}
    >
      {(todos) => (
        <CardView
          sx={{
            height: "calc(100vh - 80px)",
          }}
          operations={operations}
          cardActions={actions}
          handler={(search) => todos.filter((todo) => todo.title.includes(search))}
          onAction={handleAction}
          onCardClick={handleClick}
          onOperation={handleOperation}
        />
      )}
    </FetchView>
  );
};

export default TodoCardPage;
