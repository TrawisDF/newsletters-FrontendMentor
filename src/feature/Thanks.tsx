import Button from '../ui/Button';
import Heading from '../ui/Heading';
import ThanksIcon from '../ui/ThanksIcon';

type ThanksProps = {
  email: string;
  setShown: (value: 'thanks' | 'info') => void;
};

export default function Thanks({ email, setShown }: ThanksProps) {
  return (
    <div className='thanks-layout'>
      <div>
        <ThanksIcon />
        <Heading>Thank For Subscribing!</Heading>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onClick={() => setShown('info')}>Dismiss Message</Button>
    </div>
  );
}
