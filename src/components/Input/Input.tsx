import './styles';
import { InputProps } from './types';

function Input({ id, name, type, placeholder, label, value, onChange }: InputProps) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={id}>{label}</label>
      <input className='input-component' id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;