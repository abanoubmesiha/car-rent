import React from 'react';
import {Header,AppDrawer} from './Layouts'
import Cars from './Cars'
 
function App() {
    return (
        <React.Fragment>
            <AppDrawer>
                {/* <Header /> */}
                <Cars />
            </AppDrawer>
        </React.Fragment>
    );
};
export default App