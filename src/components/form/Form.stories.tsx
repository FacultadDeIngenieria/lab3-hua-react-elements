import { Meta, StoryObj } from '@storybook/react';
import { Form, FormError, FormInput, FormLabel, FormSubmit, useFormStore } from './Form';

const meta: Meta<typeof Form> = {
  title: 'common/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const HUAForm: Story = {
  // args: {
  //   variant: 'primary',
  //   onClick: action('clicked'),
  //   size: 'medium',
  // },
  render: () => {
    const store = useFormStore({ defaultValues: { name: '' } });

    store.useSubmit((r) => alert(r.values.name));

    return (
      <Form store={store}>
        <FormLabel name={store.names.name}>Name</FormLabel>
        <FormInput name={store.names.name} />
        <FormError name={store.names.name} />
        <FormSubmit>Submit</FormSubmit>
      </Form>
    );
  },
};
