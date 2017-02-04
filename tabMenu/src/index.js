import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {
    handleSelect(index, last) {
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }
    render() {
        return (
            <Tabs
                onSelect={this.handleSelect}
                selectedIndex={0}
            >
                <TabList>
                    <Tab>Foo</Tab>
                    <Tab>Bar</Tab>
                    <Tab>Baz</Tab>
                </TabList>
                <TabPanel>
                    <h2>Hello from Foo</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Bar</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Baz</h2>
                </TabPanel>
            </Tabs>
        );
    }
}
render(<App/>, document.getElementById('root'));