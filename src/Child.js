import React, { Component } from 'react'
import { MyConsumer } from './contextService';

export default class Child extends Component {
    render() {
        // const { users } = this.props;
        return (
            <div>
                <MyConsumer>
                {
                    (value) => {
                        return (<div>{value}</div>)
                    }
                }
                </MyConsumer>
            </div>
        )
    }
}
