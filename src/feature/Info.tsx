import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '../ui/Button';
import ListIcon from '../ui/ListIcon';
import ListBox from '../ui/ListBox';
import Heading from '../ui/Heading';

type InputForm = {
  email: string;
};

type InfoProps = {
  setShown: (value: 'thanks' | 'info') => void;
  setEmail: (value: string) => void;
};

export default function Info({ setShown, setEmail }: InfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    setEmail(data.email);
    setShown('thanks');
  };
  return (
    <div className='subscribe-info'>
      <Heading>Stay updated!</Heading>
      <p>Join 60000+ product managers receiving monthly updates on:</p>
      <ul>
        <li className='list-items'>
          <ListBox>
            <ListIcon />
            <p>Product discovery and building what matters</p>
          </ListBox>
        </li>
        <li className='list-items'>
          <ListBox>
            <ListIcon />
            <p>Measuring to ensure updates are a success</p>
          </ListBox>
        </li>
        <li className='list-items'>
          <ListBox>
            <ListIcon />
            <p>And much more!</p>
          </ListBox>
        </li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-div'>
          <div className='label-error'>
            <label htmlFor='email'>Email addres</label>
            {errors.email?.type === 'required' && (
              <span>This field is required</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span>Valid email is required</span>
            )}
          </div>
          <input
            className={`${errors.email && 'error'}`}
            placeholder='example@company.com'
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
        </div>
        <Button type='submit'>Subscribe to monthly newsletters</Button>
      </form>
    </div>
  );
}
