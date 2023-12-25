import { useForm, SubmitHandler } from 'react-hook-form';
import * as React from 'react';
import { Input, Textarea } from '@chakra-ui/react';
import Layout from '../components/layout';
type Inputs = {
  name: string;
  textContent: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('name')); // watch input value by passing the name of it

  return (
    <Layout>
      <div
        className=" flex flex-col items-center justify-center bg-black pb-20"
        style={{ width: '100vw', height: '100dvh' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Input
            color="white"
            placeholder="your name..."
            {...register('name')}
          />
          {/* include validation with required or other standard HTML validation rules */}
          <Textarea
            bgColor="white"
            {...register('textContent', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.textContent && <span>This field is required</span>}
          <Input type="submit" />
        </form>
      </div>
    </Layout>
  );
}
