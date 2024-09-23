import {Button, Row} from "components/core";
import {MdClose, MdEdit, MdInfo} from "react-icons/md";
import React, {memo} from "react";

type TableActionsProps = {
  onInfoClick?: () => void;
  onUpdateClick?: () => void;
  onDeleteClick?: () => void;
};
const TableActions = ({onInfoClick, onUpdateClick, onDeleteClick}: TableActionsProps) => {
  return (
    <Row>
      {onInfoClick && <Button
        kind="text"
        variant="info"
        onClick={onInfoClick}>
        <MdInfo/>
      </Button>}
      {onUpdateClick && <Button
        kind="text"
        onClick={onUpdateClick}>
        <MdEdit/>
      </Button>}
      {onDeleteClick && <Button
        kind="text"
        variant="error"
        onClick={onDeleteClick}>
        <MdClose/>
      </Button>}
    </Row>
  )
}

export default memo(TableActions)
