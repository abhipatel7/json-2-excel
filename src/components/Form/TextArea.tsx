import { FieldWrapper, FieldRenderProps } from '@progress/kendo-react-form';
import { Label, Hint, Error } from '@progress/kendo-react-labels';
import { TextArea } from '@progress/kendo-react-inputs';

export const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    optional,
    value,
    ...others
  } = fieldRenderProps;

  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hindId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';

  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={'k-form-field-wrap'}>
        <TextArea
          valid={valid}
          id={id}
          disabled={disabled}
          rows={4}
          ariaDescribedBy={`${hindId} ${errorId}`}
          {...others}
        />
        {showHint && <Hint id={hindId}>{hint}</Hint>}
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

export default FormTextArea;
