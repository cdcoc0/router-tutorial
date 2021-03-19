import React, {Component} from 'react';

class HistorySample extends Component {
    //back
    handleGoBack = () => {
        this.props.history.goBack();
    }

    //home
    handleGoHome = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
        //이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }

    componentWillUnmount() {
        //컴포넌트가 언마운트되면 질문을 멈춤
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleGoBack}>back</button>
                <button onClick={this.handleGoHome}>home</button>
            </div>
        );
    }
}

// const HistorySample = () => {
//     return (
//         <div></div>
//     );
// }

export default HistorySample;