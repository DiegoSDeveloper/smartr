import { mapToCssModules } from "../Utils/utils";
import { classNames } from "../Utils/utils";

export enum AlertType {
  Success = 1,
  Warning = 2,
  Danger = 3,
  Info = 4,
}
interface alertPropTypes {
  type: AlertType;
  className?: string;
  children?: React.ReactNode;
}
export function Alert(props: alertPropTypes) {
  const { type, children, className } = props;
  let classes = "";
  switch (type) {
    case AlertType.Danger:
      {
        classes = "alert-danger";
      }
      break;
    case AlertType.Warning:
      {
        classes = "alert-warning";
      }
      break;
    case AlertType.Success:
      {
        classes = "alert-success";
      }
      break;
    case AlertType.Info:
      {
        classes = "alert-info";
      }
      break;
  }
  classes = mapToCssModules(classNames(classes, className));
  return (
    <>
      <div className={`alert ${classes} text-center`} role="alert">
        {children}
      </div>
    </>
  );
}
