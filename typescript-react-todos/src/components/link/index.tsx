import * as React from 'react';


interface IProps {
    active: boolean;
    onClick: () => void;
}

const Link: React.SFC<IProps> = ({ active, children, onClick }) => (
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
