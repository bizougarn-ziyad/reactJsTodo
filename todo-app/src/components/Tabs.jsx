import React from 'react'

export const Tabs = (props) => {
    const { todos, selectedTab, setSelectedTab } = props;
    const tabs = ['All', 'Active', 'Completed'];

    return (
        <nav className='tab-container' style={{ textAlign: 'center' }}>
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ? todos.length : tab === 'Active' ?
                    todos.filter(val => !val.complete).length :
                    todos.filter(val => val.complete).length;
                return (
                    <button onClick={() => setSelectedTab(tab)} key={tabIndex} className={'tab-button' + (tab === selectedTab ?
                        ' tab-selected' :
                        ' ')}>
                        <h4>{tab}<span>({numOfTasks})</span></h4>
                    </button>
                );
            })}
            <hr />
        </nav >
    )
}