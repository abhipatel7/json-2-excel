import {
  Form as KendoForm,
  Field,
  FormElement,
} from '@progress/kendo-react-form';
import FormTextArea from './TextArea';
import { FC } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { FormProps } from '../../interface';
import { textAreaValidator } from '../../utilities';

export const Form: FC<FormProps> = ({ jsonData, setJsonData }) => {
  const handleSubmit = ({ jsonData }: { [name: string]: any }) => {
    try {
      JSON.parse(jsonData);
    } catch (e) {
      return false;
    }
    setJsonData(jsonData);
  };

  return (
    <KendoForm
      initialValues={{
        jsonData,
      }}
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ padding: 10 }}>
          <fieldset className={'k-form-fieldset'}>
            <Field
              id={'jsonData'}
              name={'jsonData'}
              label={'Paste your JSON Data:'}
              value={formRenderProps.valueGetter('jsonData')}
              component={FormTextArea}
              validator={textAreaValidator}
            />
            <div className="k-form-buttons k-justify-content-end">
              <Button
                themeColor={'primary'}
                type={'submit'}
                disabled={!formRenderProps.allowSubmit}
              >
                Show Table
              </Button>
            </div>
          </fieldset>
        </FormElement>
      )}
    />
  );
};
