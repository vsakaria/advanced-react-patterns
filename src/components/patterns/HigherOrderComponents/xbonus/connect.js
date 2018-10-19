import React from 'react'
import PropTypes from 'prop-types'

// Don't do window.__store ever!! this is only to avoid using a provider until the context exercise
const store = window.__store

export const connect = (mapStateToProps, mapDispatchToProps) => {
    return Component => {
        class ConnectedComponent extends React.Component {
            componentDidMount() {
                // We subscribe to the store just once, when the component is mounted. https://reactjs.org/docs/react-component.html#componentdidmount
                this.unsubscribe = store.subscribe(() => {
                    this.forceUpdate()
                })
            }

            componentWillUnmount() {
                // We unsubscribe from the store when the component is unmounted. https://reactjs.org/docs/react-component.html#componentwillunmount
                this.unsubscribe()
            }

            render() {
                const propsWithDataFromTheState = mapStateToProps && mapStateToProps(store.getState())
                const dispatch = mapDispatchToProps && mapDispatchToProps(store.dispatch)

                return (
                    <Component
                        {...this.props} // child component props
                        {...propsWithDataFromTheState} // adding new props with the state the component needs
                        {...dispatch} // injecting the store.dispatch method to the component
                    />
                )
            }
        }

        // You don't need to change anyting from here
        ConnectedComponent.contextTypes = {
            store: PropTypes.object
        }

        return ConnectedComponent
    }
}