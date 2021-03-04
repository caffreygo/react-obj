import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component  {
    render() {
        return (
            <div>
                开始使用React!
            </div>
        )
    }
}

ReactDom.render(<Hello />, document.getElementById('root'));
