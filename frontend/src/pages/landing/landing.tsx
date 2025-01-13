import { IlandingProps } from './ts';

const landing = ({ ...props }: IlandingProps) => {
  return <div {...props}>{'landing'}</div>;
};

export default landing;
