import React, {cloneElement, isValidElement, ReactElement, ReactNode} from 'react';

interface FormContainerProps {
  children: ReactNode;
  readOnly?: boolean; // Optional readOnly prop
}

const FormContainer: React.FC<FormContainerProps> = ({children, readOnly = false}) => {
  const renderChildrenWithReadOnly = (children: ReactNode): ReactNode => {
    return React.Children.map(children, (child) => {
      if (isValidElement(child)) {
        // If the child is a React element, clone it and add the readOnly prop
        return cloneElement(child as ReactElement<any>, {readOnly: true});
      }
      return child; // If it's not a React element, return it as is
    });
  };
  if (readOnly === false) {
    return <>{children}</>;
  }
  return <>{renderChildrenWithReadOnly(children)}</>;
};

export default FormContainer;
