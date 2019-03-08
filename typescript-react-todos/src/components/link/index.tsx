import * as React from 'react';


export interface IProps {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const Link = ({ active, children, onClick }: IProps) => (
    <button
       onClick={ onClick }
       disabled={ active }
       style={{
           marginLeft: '4px',
       }}
    >
      { children }
    </button>
)

export default Link;
