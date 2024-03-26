import { Card } from "flowbite-react";

export const AppCard = (props) => {
  return (
    <Card href={`/${props.applicationId}`}>
      <h5>{props.applicationName}</h5>
      <p>{props.createDate}</p>
    </Card>
  );
};
