import { One, FieldType, TypedField } from "react-declarative";

import Card from "../../components/common/Card";

const CC_FULL_HEIGHT = "calc(100vh - 85px)";
const CC_CELL_PADDING = "7px";
const CC_MIN_HEIGHT = "635px";

const fields: TypedField[] = [
  {
    type: FieldType.Hero,
    columns: "12",
    tabletColumns: "6",
    desktopColumns: "7",
    height: `max(${CC_FULL_HEIGHT}, ${CC_MIN_HEIGHT})`,
    phoneHeight: `max(${CC_MIN_HEIGHT}, 30vh)`,
    desktopRight: CC_CELL_PADDING,
    tabletRight: CC_CELL_PADDING,
    phoneBottom: CC_CELL_PADDING,
    child: {
      type: FieldType.Component,
      element: () => <Card />,
    },
  },
  {
    type: FieldType.Group,
    fieldBottomMargin: "0",
    fieldRightMargin: "0",
    columns: "12",
    tabletColumns: "6",
    desktopColumns: "5",
    fields: [
      {
        type: FieldType.Hero,
        height: `calc(${CC_FULL_HEIGHT} / 2)`,
        phoneHeight: `max(calc(${CC_MIN_HEIGHT} / 2), 30vh)`,
        minHeight: `calc(${CC_MIN_HEIGHT} / 2)`,
        bottom: CC_CELL_PADDING,
        child: {
          type: FieldType.Component,
          element: () => <Card />,
        },
      },
      {
        type: FieldType.Hero,
        height: `calc(${CC_FULL_HEIGHT} / 2)`,
        phoneHeight: `max(calc(${CC_MIN_HEIGHT} / 2), 30vh)`,
        minHeight: `calc(${CC_MIN_HEIGHT} / 2)`,
        child: {
          type: FieldType.Component,
          element: () => <Card />,
        },
      },
    ],
  },
];

export const DashboardPage = () => <One fields={fields} />;

export default DashboardPage;
