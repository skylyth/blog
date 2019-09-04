import React from 'react'
import { Icon } from 'antd';

export default function skyForm(Comp) {
    return class newcomp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
            this.rules = {}
        }
        skyrules = (key, rules, Comp) => {
            this.rules[key] = rules
            const suffix = this.state[key] ? <Icon type="close-circle" onClick={() => this.clearFildes(key)} /> : <span />
            return <div>
                <p>{this.state[key]}</p>
                <p>{this.state[key + 'message']}</p>
                {
                    React.cloneElement(Comp, {
                        suffix,
                        name: key,
                        onChange: this.handleChange,
                        value: this.state[key]
                    })
                }
            </div>
        }
        skyvalidate = () => {
            const ret = Object.keys(this.rules).map(key => {
                return this.skyvalidateinput(key)
            })
            return ret.every(v => !v)
        }
        skyvalidateinput = (key) => {
            let rule = this.rules[key]
            rule = Array.isArray(rule) ? rule : [rule]

            let ret = rule.some(r => {
                if (r.require) {
                    if (!this.state[key]) {
                        this.setState({
                            [key + 'message']: r.message
                        })
                        return true
                    } else {
                        this.setState({
                            [key + 'message']: ''
                        })
                    }
                }
            })
            return ret
        }
        clearFildes = (key) => {
            console.log(key)
            this.setState({
                [key]: ''
            })
        }
        handleChange = (e) => {
            const { name, value } = e.target
            console.log(name, 122, [name])
            this.setState({
                [name]: value
            }, () => {
                this.skyvalidateinput(name)
            })
        }
        render() {
            return <Comp {...this.props} skyrules={this.skyrules} skyvalidate={this.skyvalidate}></Comp>
        }
    }
} 